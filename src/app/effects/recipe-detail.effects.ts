import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  GetRecipeFailureAction,
  GetRecipeRequestAction,
  GetRecipeSuccessAction,
  PostRecipeRequestAction,
  PostRecipeSuccessAction, PutRecipeRequestAction, PutRecipeSuccessAction
} from '../actions/recipe-detail.actions';
import { RoutePath, whenNavigated } from '../app-utils';
import { RecipeModel } from '../models/api/recipe.model';

@Injectable()
export class RecipeDetailEffects {
  @Effect() readonly requireRecipeById$ = this.actions$.pipe(
    whenNavigated(({view, id}) => (
      view === RoutePath.Recipes && id != null ?
        new GetRecipeRequestAction(id) :
        null
    ))
  );

  @Effect() readonly getRecipeById$ = this.actions$.pipe(
    ofType(GetRecipeRequestAction.type),
    switchMap(({id}: GetRecipeRequestAction) => this.http.get<RecipeModel>(`/recipes/${id}`).pipe(
      map(recipe => new GetRecipeSuccessAction(recipe)),
      catchError(() => of(new GetRecipeFailureAction(id)))
    ))
  );

  @Effect() readonly postRecipe$ = this.actions$.pipe(
    ofType(PostRecipeRequestAction.type),
    switchMap(({recipe}: PostRecipeRequestAction) => this.http.post<RecipeModel>('/recipes', recipe).pipe(
      map(response => new PostRecipeSuccessAction(response))
    ))
  );

  @Effect() readonly putRecipe$ = this.actions$.pipe(
      ofType(PutRecipeRequestAction.type),
      switchMap(({id, recipe}: PutRecipeRequestAction) => this.http.put<RecipeModel>(`/recipes/${id}`, recipe).pipe(
          map(response => new PutRecipeSuccessAction(response))
      ))
  );

  constructor(private readonly actions$: Actions,
              private readonly http: HttpClient) { }
}

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  GetAuthorsRequestAction,
  GetAuthorsSuccessAction,
  PostAuthorRequestAction,
  PostAuthorSuccessAction, PutAuthorRequestAction, PutAuthorSuccessAction
} from '../actions/authors.actions';
import { RoutePath, whenNavigated } from '../app-utils';
import { AuthorModel } from '../models/api/author.model';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthorsEffects {
  @Effect() readonly requireAuthors$ = this.actions$.pipe(
    whenNavigated(({view, id}) => (
      (view === RoutePath.Recipes && id == null) ||
      (view === RoutePath.Authors) ?
        new GetAuthorsRequestAction() :
        null
    ))
  );

  @Effect() readonly getAuthors$ = this.actions$.pipe(
    ofType(GetAuthorsRequestAction.type),
    switchMap(() => this.http.get<AuthorModel[]>('/authors').pipe(
      map(authors => new GetAuthorsSuccessAction(authors))
    ))
  );

  @Effect() readonly postAuthor$ = this.actions$.pipe(
      ofType(PostAuthorRequestAction.type),
      switchMap(({author}: PostAuthorRequestAction) => this.http.post<AuthorModel>('/authors', author).pipe(
          map(response => new PostAuthorSuccessAction(response))
      ))
  );

  @Effect() readonly putAuthor$ = this.actions$.pipe(
      ofType(PutAuthorRequestAction.type),
      switchMap(({id, author}: PutAuthorRequestAction) => this.http.put<AuthorModel>(`/authors/${id}`, author).pipe(
          map(response => new PutAuthorSuccessAction(response))
      ))
  );

  constructor(private readonly actions$: Actions,
              private readonly http: HttpClient) { }
}

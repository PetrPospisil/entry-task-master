import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  GetRatingsRequestAction,
  GetRatingsSuccessAction,
  PostRatingRequestAction,
  PostRatingSuccessAction
} from '../actions/ratings.actions';
import { RoutePath, whenNavigated } from '../app-utils';
import { RatingModel } from '../models/api/rating.model';

@Injectable()
export class RatingsEffects {
  @Effect() readonly requireRatings$ = this.actions$.pipe(
    whenNavigated(({view, id}) => (
      (view === RoutePath.Recipes && id == null) ||
      (view === RoutePath.Authors) ?
        new GetRatingsRequestAction() :
        null
    ))
  );

  @Effect() readonly getRatings$ = this.actions$.pipe(
    ofType(GetRatingsRequestAction.type),
    switchMap(() => this.http.get<RatingModel[]>('/ratings').pipe(
      map(ratings => new GetRatingsSuccessAction(ratings))
    ))
  );

  @Effect() readonly postRating$ = this.actions$.pipe(
      ofType(PostRatingRequestAction.type),
      switchMap(({rating}: PostRatingRequestAction) => this.http.post<RatingModel>('/ratings', rating).pipe(
          map(response => new PostRatingSuccessAction(response))
      ))
  );

  constructor(private readonly actions$: Actions,
              private readonly http: HttpClient) { }
}

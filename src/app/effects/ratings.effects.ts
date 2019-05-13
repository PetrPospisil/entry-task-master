import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { GetRatingsRequestAction, GetRatingsSuccessAction } from '../actions/ratings.actions';
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

  constructor(private readonly actions$: Actions,
              private readonly http: HttpClient) { }
}

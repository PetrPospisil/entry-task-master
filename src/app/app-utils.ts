import { ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { MonoTypeOperatorFunction } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { NavigateRequestAction } from './actions/route.actions';
import { RouteModel } from './models/helper/route.model';

export enum RoutePath {
  Recipes = 'recipes',
  Authors = 'authors'
}

export function whenNavigated(mapper: (route: RouteModel) => Action | null): MonoTypeOperatorFunction<Action> {
  return action$ => action$.pipe(
    ofType(NavigateRequestAction.type),
    map(({route}: NavigateRequestAction) => mapper(route)),
    filter((action): action is Action => action != null)
  );
}

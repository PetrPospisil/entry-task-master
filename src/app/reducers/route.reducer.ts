import { RouteActions, NavigateSuccessAction } from '../actions/route.actions';
import { RoutePath } from '../app-utils';
import { RouteState } from '../models/helper/app-state.model';

const INITIAL_STATE: RouteState = {
  view: RoutePath.Recipes
};

export function routeReducer(state: RouteState = INITIAL_STATE,
                             action: RouteActions): RouteState {
  switch (action.type) {
    case NavigateSuccessAction.type:
      return action.route;

    default:
      return state;
  }
}

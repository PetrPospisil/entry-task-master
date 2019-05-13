import { AppStateModel } from '../models/helper/app-state.model';
import { createSelector } from '@ngrx/store';

const $route = ({route}: AppStateModel) => route;

export const $routeView = createSelector(
  $route,
  ({view}): string => view
);

export const $routeId = createSelector(
  $route,
  ({id}): string | null => id || null
);

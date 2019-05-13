import { Action } from '@ngrx/store';
import { RouteModel } from '../models/helper/route.model';

export class NavigateRequestAction implements Action {
  static readonly type = 'Navigate';
  readonly type = NavigateRequestAction.type;

  constructor(public readonly route: RouteModel) { }
}

export class NavigateSuccessAction implements Action {
  static readonly type = 'StoreRoute';
  readonly type = NavigateSuccessAction.type;

  constructor(public readonly route: RouteModel) { }
}

export type RouteActions
  = NavigateSuccessAction
  | NavigateRequestAction;

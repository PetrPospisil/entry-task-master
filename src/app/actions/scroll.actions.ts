import { Action } from '@ngrx/store';

export class StoreScrollAction implements Action {
  static readonly type = 'StoreScroll';
  readonly type = StoreScrollAction.type;

  constructor(public readonly scroll: number) { }
}

export type ScrollActions
  = StoreScrollAction;

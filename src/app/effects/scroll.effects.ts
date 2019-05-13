import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { StoreScrollAction } from '../actions/scroll.actions';
import { map, debounceTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Injectable()
export class ScrollEffects {
  @Effect() readonly storeScroll$ = fromEvent(window, 'scroll').pipe(
    map(() => new StoreScrollAction(window.scrollY)),
    debounceTime(50)
  );
}
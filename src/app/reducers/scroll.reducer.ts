import { ScrollState } from '../models/helper/app-state.model';
import { ScrollActions, StoreScrollAction } from '../actions/scroll.actions';

const INITIAL_STATE: ScrollState = 0;

export function scrollReducer(state: ScrollState = INITIAL_STATE,
                              action: ScrollActions): ScrollState {
  switch (action.type) {
    case StoreScrollAction.type:
      return action.scroll;

    default:
      return state;
  }
}
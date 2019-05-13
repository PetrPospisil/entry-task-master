import {
  GetRatingsRequestAction,
  GetRatingsSuccessAction,
  PostRatingRequestAction,
  PostRatingSuccessAction,
  RatingsActions
} from '../actions/ratings.actions';
import { RatingsState } from '../models/helper/app-state.model';

const INITIAL_STATE: RatingsState = {
  data: [],
  loading: false
};

export function ratingsReducer(state: RatingsState = INITIAL_STATE,
                               action: RatingsActions): RatingsState {
  switch (action.type) {
    case GetRatingsRequestAction.type:
    case PostRatingRequestAction.type:
      return {
        ...state,
        loading: true
      };

    case GetRatingsSuccessAction.type:
      return {
        ...state,
        data: action.ratings,
        loading: false
      };

    case PostRatingSuccessAction.type:
      return {
        ...state,
        data: [...state.data, action.rating],
        loading: false
      };

    default:
      return state;
  }
}

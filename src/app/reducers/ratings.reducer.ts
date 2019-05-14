import {
  GetRatingsRequestAction,
  GetRatingsSuccessAction,
  PostRatingRequestAction,
  PostRatingSuccessAction,
  RatingsActions
} from '../actions/ratings.actions';
import { RatingsState } from '../models/helper/app-state.model';
import { RatingModel } from '../models/api/rating.model';

const INITIAL_STATE: RatingsState = {
  data: {},
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
        data: action.ratings.reduce<{[id: string]: RatingModel[]}>(
            (acc, item) => ({...acc, [item.recipeId]: [...(acc[item.recipeId] || []), item]}),
            {}
        ),
        loading: false
      };

    case PostRatingSuccessAction.type:
      return {
        ...state,
        data: {...state.data, [action.rating.recipeId]: [...(state.data[action.rating.recipeId] || []), action.rating]},
        loading: false
      };

    default:
      return state;
  }
}

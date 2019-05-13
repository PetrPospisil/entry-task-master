import { RecipeListState } from '../models/helper/app-state.model';
import { GetRecipesRequestAction, GetRecipesSuccessAction, RecipeListActions } from '../actions/recipe-list.actions';

const INITIAL_STATE: RecipeListState = {
  data: [],
  loading: false
};

export function recipeListReducer(state: RecipeListState = INITIAL_STATE,
                                  action: RecipeListActions): RecipeListState {
  switch (action.type) {
    case GetRecipesRequestAction.type:
      return {
        ...state,
        loading: true
      };

    case GetRecipesSuccessAction.type:
      return {
        ...state,
        data: action.recipes,
        loading: true
      };

    default:
      return state;
  }
}

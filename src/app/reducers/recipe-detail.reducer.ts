import { RecipeDetailState } from '../models/helper/app-state.model';
import {
  GetRecipeRequestAction,
  GetRecipeSuccessAction,
  PostRecipeRequestAction,
  PostRecipeSuccessAction,
  PutRecipeRequestAction,
  PutRecipeSuccessAction,
  RecipeDetailActions,
  GetRecipeFailureAction
} from '../actions/recipe-detail.actions';

const INITIAL_STATE: RecipeDetailState = {
  data: {},
  loading: false
};

export function recipeDetailReducer(state: RecipeDetailState = INITIAL_STATE,
                                    action: RecipeDetailActions): RecipeDetailState {
  switch (action.type) {
    case GetRecipeRequestAction.type:
    case PostRecipeRequestAction.type:
    case PutRecipeRequestAction.type:
      return {
        ...state,
        loading: true
      };

    case GetRecipeSuccessAction.type:
    case PostRecipeSuccessAction.type:
    case PutRecipeSuccessAction.type:
      return {
        ...state,
        data: {
          ...state.data,
          [action.recipe.id!]: action.recipe
        },
        loading: false
      };

    case GetRecipeFailureAction.type:
      return {
        ...state,
        loading: false
      }; 

    default:
      return state;
  }
}

import { AppStateModel } from '../models/helper/app-state.model';
import { createSelector } from '@ngrx/store';
import { SimpleRecipeModel } from '../models/api/simple-recipe.model';

const $recipeList = ({recipeList}: AppStateModel) => recipeList;

export const $recipeListData = createSelector(
  $recipeList,
  ({data}): SimpleRecipeModel[] => data
);

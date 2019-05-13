import { AppStateModel } from '../models/helper/app-state.model';
import { createSelector } from '@ngrx/store';
import { SimpleRecipeModel, SimpleRecipeRowModel } from '../models/api/simple-recipe.model';
import { $ratingsData } from './ratings.selectors';

const $recipeList = ({recipeList}: AppStateModel) => recipeList;

export const $recipeListData = createSelector(
  $recipeList,
  ({data}): SimpleRecipeModel[] => data
);

export const $recipeListDataWithRatings = createSelector(
    $recipeListData,
    $ratingsData,
    (recipes, ratings): SimpleRecipeRowModel[] => recipes
        .map(recipe => ({
            ...recipe,
            ratings: ratings.filter(({recipeId}) => recipeId === recipe.id)
        }))
);

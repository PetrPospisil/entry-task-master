import { AppStateModel } from '../models/helper/app-state.model';
import { createSelector } from '@ngrx/store';
import { $routeId, $routeView } from './route.selectors';
import { RecipeModel } from '../models/api/recipe.model';
import { IdMapModel } from '../models/helper/id-map.model';

const $recipeDetail = ({recipeDetail}: AppStateModel) => recipeDetail;

export const $recipeDetailLoading = createSelector(
  $recipeDetail,
  ({loading}): boolean => loading
);

export const $recipeDetailData = createSelector(
  $recipeDetail,
  ({data}): IdMapModel<RecipeModel> => data
);

export const $recipeDetailLoaded = createSelector(
  $recipeDetailLoading,
  (loading): boolean => !loading
);

export const $viewedRecipe = createSelector(
  $recipeDetailData,
  $routeId,
  (recipes, id): RecipeModel | null => id != null ? recipes[id] : null
);

export const $recipe = createSelector(
  $recipeDetailData,
  $routeId,
  (recipes, id): RecipeModel | null => id != null ? recipes[id] : null
);

export const $recipeByIdExists = (id: string) => createSelector(
  $recipeDetailData,
  (recipes): boolean => id in recipes
);

export const $recipeById = (id: string) => createSelector(
  $recipeDetailData,
  (recipes): RecipeModel => recipes[id]
);

export const $breadcrumbs = createSelector(
  $routeView,
  $routeId,
  $recipeDetailData,
  (view, id, recipes): string[] => [
    `${view[0].toUpperCase()}${view.substr(1)}`,
    ...id != null ? [recipes[id].title] : []
  ]
);
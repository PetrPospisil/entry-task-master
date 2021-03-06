import { RatingModel } from '../api/rating.model';
import { ResourceModel } from './resource.model';
import { RecipeModel } from '../api/recipe.model';
import { AuthorModel } from '../api/author.model';
import { SimpleRecipeModel } from '../api/simple-recipe.model';
import { IdMapModel } from './id-map.model';
import { RouteModel } from './route.model';

export type RecipeListState = ResourceModel<SimpleRecipeModel[]>;
export type RecipeDetailState = ResourceModel<IdMapModel<RecipeModel>>;
export type AuthorsState = ResourceModel<AuthorModel[]>;
export type RatingsState = ResourceModel<{[id: string]: RatingModel[]}>;
export type RouteState = RouteModel;
export type ScrollState = number;

export interface AppStateModel {
  recipeList: RecipeListState;
  recipeDetail: RecipeDetailState;
  authors: AuthorsState;
  ratings: RatingsState;
  route: RouteState;
  scroll: ScrollState;
}

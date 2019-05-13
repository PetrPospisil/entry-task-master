import { Action } from '@ngrx/store';
import { RecipeModel } from '../models/api/recipe.model';
import { SimpleRecipeModel } from '../models/api/simple-recipe.model';

export class GetRecipesRequestAction implements Action {
  static readonly type = 'GetRecipesRequest';
  readonly type = GetRecipesRequestAction.type;
}

export class GetRecipesSuccessAction implements Action {
  static readonly type = 'GetRecipesSuccess';
  readonly type = GetRecipesSuccessAction.type;

  constructor(public readonly recipes: SimpleRecipeModel[]) { }
}

export type RecipeListActions
  = GetRecipesRequestAction
  | GetRecipesSuccessAction;

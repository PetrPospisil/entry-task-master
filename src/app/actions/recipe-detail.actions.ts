import { Action } from '@ngrx/store';
import { RecipeModel } from '../models/api/recipe.model';

export class GetRecipeRequestAction implements Action {
  static readonly type = 'GetRecipeRequest';
  readonly type = GetRecipeRequestAction.type;

  constructor(public readonly id: string) { }
}

export class GetRecipeSuccessAction implements Action {
  static readonly type = 'GetRecipeSuccess';
  readonly type = GetRecipeSuccessAction.type;

  constructor(public readonly recipe: RecipeModel) { }
}

export class GetRecipeFailureAction implements Action {
  static readonly type = 'GetRecipeFailure';
  readonly type = GetRecipeFailureAction.type;

  constructor(public readonly id: string) { }
}

export class PostRecipeRequestAction implements Action {
  static readonly type = 'PostRecipeRequest';
  readonly type = PostRecipeRequestAction.type;

  constructor(public readonly recipe: RecipeModel) { }
}

export class PostRecipeSuccessAction implements Action {
  static readonly type = 'PostRecipeSuccess';
  readonly type = PostRecipeSuccessAction.type;

  constructor(public readonly recipe: RecipeModel) { }
}

export class PutRecipeRequestAction implements Action {
  static readonly type = 'PutRecipeRequest';
  readonly type = PutRecipeRequestAction.type;

  constructor(public readonly id: string,
              public readonly recipe: RecipeModel) { }
}

export class PutRecipeSuccessAction implements Action {
  static readonly type = 'PutRecipeSuccess';
  readonly type = PutRecipeSuccessAction.type;

  constructor(public readonly recipe: RecipeModel) { }
}

export type RecipeDetailActions
  = GetRecipeRequestAction
  | GetRecipeSuccessAction
  | GetRecipeFailureAction
  | PostRecipeRequestAction
  | PostRecipeSuccessAction
  | PutRecipeRequestAction
  | PutRecipeSuccessAction;

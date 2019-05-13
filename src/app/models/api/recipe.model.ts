import { SimpleRecipeModel } from './simple-recipe.model';
import { IngredientModel } from './ingredient.model';

export interface RecipeModel extends SimpleRecipeModel {
  ingredients: IngredientModel[];
  text: string;
}

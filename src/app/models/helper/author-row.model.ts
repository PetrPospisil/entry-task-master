import { AuthorModel } from '../api/author.model';
import { SimpleRecipeModel } from '../api/simple-recipe.model';

export interface AuthorRowModel extends AuthorModel {
  recipes: SimpleRecipeModel[];
}

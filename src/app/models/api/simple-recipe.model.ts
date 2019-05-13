import { RatingModel } from './rating.model';

export interface SimpleRecipeModel {
  id?: string;
  title: string;
  authorIds: string[];
  imageUrl: string;
}

export interface SimpleRecipeRowModel extends SimpleRecipeModel {
  ratings: RatingModel[];
}

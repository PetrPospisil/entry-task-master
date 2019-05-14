
export interface SimpleRecipeModel {
  id?: string;
  title: string;
  authorIds: string[];
  imageUrl: string;
}

export interface SimpleRecipeRowModel extends SimpleRecipeModel {
  ratingsAvg: number;
}

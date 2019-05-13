import { RatingModel } from '../models/api/rating.model';
import { AppStateModel } from '../models/helper/app-state.model';
import { createSelector } from '@ngrx/store';
import { AuthorModel } from '../models/api/author.model';
import { AuthorRowModel } from '../models/helper/author-row.model';
import { $recipeListData } from './recipe-list.selectors';

const $ratings = ({ratings}: AppStateModel) => ratings;

export const $ratingsData = createSelector(
  $ratings,
  ({data}): RatingModel[] => data
);

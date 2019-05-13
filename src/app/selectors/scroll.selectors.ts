import { AppStateModel } from '../models/helper/app-state.model';
import { createSelector } from '@ngrx/store';

const $scroll = ({scroll}: AppStateModel) => scroll;

export const $toolbarRaised = createSelector(
  $scroll,
  (scroll): boolean => scroll > 0
);

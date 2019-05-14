import { Component } from '@angular/core';
import { PostRatingRequestAction } from '../../actions/ratings.actions';

import { AuthorDataModel } from '../../models/api/author.model';
import { RatingModel } from '../../models/api/rating.model';
import { AppStateModel } from '../../models/helper/app-state.model';
import { select, Store } from '@ngrx/store';
import { $recipeListDataWithRatings } from '../../selectors/recipe-list.selectors';
import { RoutePath } from 'src/app/app-utils';

@Component({
  templateUrl: './recipes-view.component.html',
  styleUrls: ['./recipes-view.component.scss']
})
export class RecipesViewComponent {
  readonly RoutePath = RoutePath;

  readonly recipeListData$ = this.store.pipe(select($recipeListDataWithRatings));

  constructor(private readonly store: Store<AppStateModel>) { }

  onRate = ($event: RatingModel) => {
    this.store.dispatch(new PostRatingRequestAction($event));
  }
}

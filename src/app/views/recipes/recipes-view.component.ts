import { Component } from '@angular/core';
import { PostRatingRequestAction } from '../../actions/ratings.actions';

import { AuthorDataModel } from '../../models/api/author.model';
import { RatingModel } from '../../models/api/rating.model';
import { AppStateModel } from '../../models/helper/app-state.model';
import { select, Store } from '@ngrx/store';
import { $recipeListDataWithRatings } from '../../selectors/recipe-list.selectors';
import { RoutePath } from 'src/app/app-utils';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SimpleRecipeRowModel } from '../../models/api/simple-recipe.model';
import { ClickEvent } from 'angular-star-rating';

@Component({
  templateUrl: './recipes-view.component.html',
  styleUrls: ['./recipes-view.component.scss']
})
export class RecipesViewComponent {
  readonly RoutePath = RoutePath;

  readonly recipeListData$: Observable<SimpleRecipeRowModel[]> = this.store.pipe(select($recipeListDataWithRatings), tap(console.log));

  constructor(private readonly store: Store<AppStateModel>) { }

  onRate = (rating: number, recipeId: string) => {
    this.store.dispatch(new PostRatingRequestAction({recipeId, rating}));
  }

  trackByFn(index: number, recipe: SimpleRecipeRowModel): string | undefined  {
    return recipe.id;
  }
}

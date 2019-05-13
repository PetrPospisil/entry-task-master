import { Component } from '@angular/core';
import { AppStateModel } from '../../models/helper/app-state.model';
import { select, Store } from '@ngrx/store';
import { $recipeListData } from '../../selectors/recipe-list.selectors';
import { RoutePath } from 'src/app/app-utils';

@Component({
  templateUrl: './recipes-view.component.html',
  styleUrls: ['./recipes-view.component.scss']
})
export class RecipesViewComponent {
  readonly RoutePath = RoutePath;

  readonly recipeListData$ = this.store.pipe(select($recipeListData));

  constructor(private readonly store: Store<AppStateModel>) { }
}

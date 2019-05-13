import { Component } from '@angular/core';
import { AppStateModel } from '../../models/helper/app-state.model';
import { select, Store } from '@ngrx/store';
import { $viewedRecipe } from '../../selectors/recipe-detail.selectors';

enum IngredientColumn {
  Name = 'Name',
  Amount = 'Amount',
}

@Component({
  templateUrl: './recipe-detail-view.component.html',
  styleUrls: ['./recipe-detail-view.component.scss']
})
export class RecipeDetailViewComponent {
  readonly IngredientColumn = IngredientColumn;
  readonly ingredientColumns: IngredientColumn[] = [
    IngredientColumn.Name,
    IngredientColumn.Amount,
  ];

  readonly viewedRecipe$ = this.store.pipe(select($viewedRecipe));

  constructor(private readonly store: Store<AppStateModel>) { }
}

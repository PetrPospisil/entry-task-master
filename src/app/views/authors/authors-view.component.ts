import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStateModel } from '../../models/helper/app-state.model';
import { $authorRows } from '../../selectors/authors.selectors';
import { RoutePath } from '../../app-utils';

enum AuthorsColumn {
  Name = 'Name',
  Email = 'Email',
  Recipes = 'Recipes',
}

@Component({
  templateUrl: './authors-view.component.html',
  styleUrls: ['./authors-view.component.scss']
})
export class AuthorsViewComponent {
  readonly RoutePath = RoutePath;
  readonly AuthorsColumn = AuthorsColumn;

  readonly columns: AuthorsColumn[] = [
    AuthorsColumn.Name,
    AuthorsColumn.Email,
    AuthorsColumn.Recipes,
  ];

  readonly authorRows$ = this.store.pipe(select($authorRows));

  constructor(private readonly store: Store<AppStateModel>) { }
}

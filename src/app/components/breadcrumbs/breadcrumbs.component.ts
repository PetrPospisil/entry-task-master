import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { $breadcrumbs } from 'src/app/selectors/recipe-detail.selectors';
import { AppStateModel } from 'src/app/models/helper/app-state.model';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  readonly breadcrumbs$ = this.store.pipe(select($breadcrumbs));

  constructor(private readonly store: Store<AppStateModel>) { }
}

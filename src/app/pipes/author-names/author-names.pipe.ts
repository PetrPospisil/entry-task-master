import { Pipe, PipeTransform } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStateModel } from '../../models/helper/app-state.model';
import { $authorIdNameMap } from '../../selectors/authors.selectors';

@Pipe({
  name: 'appAuthorNames',
  pure: false
})
export class AuthorNamesPipe implements PipeTransform {
  private idNameMap: {[id: string]: string};

  constructor(private readonly store: Store<AppStateModel>) {
    this.store.pipe(select($authorIdNameMap))
      .subscribe(idNameMap => {
        this.idNameMap = idNameMap;
      });
  }

  transform(authorId: string): string {
    return this.idNameMap[authorId];
  }
}

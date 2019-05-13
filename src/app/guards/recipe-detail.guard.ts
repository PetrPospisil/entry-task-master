import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NotifyOfErrorAction } from '../actions/notification.actions';
import { AppStateModel } from '../models/helper/app-state.model';
import { select, Store } from '@ngrx/store';
import { filter, take, tap } from 'rxjs/operators';
import { $recipeDetailLoaded, $recipeByIdExists } from '../selectors/recipe-detail.selectors';

const ERROR_MESSAGE = 'Requested recipe does not exist!';

@Injectable()
export class RecipeDetailGuard implements CanActivate {
  constructor(private readonly store: Store<AppStateModel>,
              private readonly router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.store.pipe(
      filter($recipeDetailLoaded),
      select($recipeByIdExists(route.url[1].path)),
      take(1),
      tap(recipeExists => {
        if (!recipeExists) {
          this.store.dispatch(new NotifyOfErrorAction(ERROR_MESSAGE));
          this.router.navigateByUrl('/');
        }
      })
    );
  }
}

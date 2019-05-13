import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePath } from './app-utils';
import { RecipeDetailGuard } from './guards/recipe-detail.guard';

const routes: Routes = [
  {
    path: `${RoutePath.Recipes}/:id`,
    loadChildren: './views/recipe-detail/recipe-detail-view.module#RecipeDetailViewModule',
    canActivate: [RecipeDetailGuard]
  },
  {
    path: `${RoutePath.Recipes}`,
    loadChildren: './views/recipes/recipes-view.module#RecipesViewModule'
  },
  {
    path: `${RoutePath.Authors}`,
    loadChildren: './views/authors/authors-view.module#AuthorsViewModule'
  },
  {
    path: '**',
    redirectTo: RoutePath.Recipes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    RecipeDetailGuard,
  ]
})
export class AppRoutingModule { }

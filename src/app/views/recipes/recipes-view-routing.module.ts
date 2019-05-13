import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesViewComponent } from './recipes-view.component';

const routes: Routes = [
  {path: '', component: RecipesViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesViewRoutingModule { }

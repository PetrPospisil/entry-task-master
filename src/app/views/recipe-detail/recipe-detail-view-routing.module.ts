import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailViewComponent } from './recipe-detail-view.component';

const routes: Routes = [
  {path: '', component: RecipeDetailViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeDetailViewRoutingModule { }

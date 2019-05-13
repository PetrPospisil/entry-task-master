import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsViewComponent } from './authors-view.component';

const routes: Routes = [
  {path: '', component: AuthorsViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsViewRoutingModule { }

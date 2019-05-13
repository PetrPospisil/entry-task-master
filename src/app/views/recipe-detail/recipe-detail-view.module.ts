import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FractionModule } from '../../pipes/fraction/fraction.module';
import { RecipeDetailViewComponent } from './recipe-detail-view.component';
import { MatCardModule, MatTableModule, MatTabsModule } from '@angular/material';
import { UnpackModule } from '../../directives/unpack/unpack.module';
import { RecipeDetailViewRoutingModule } from './recipe-detail-view-routing.module';

@NgModule({
  declarations: [RecipeDetailViewComponent],
  imports: [
    CommonModule,
    RecipeDetailViewRoutingModule,
    UnpackModule,
    FractionModule,

    MatCardModule,
    MatTabsModule,
    MatTableModule,
  ]
})
export class RecipeDetailViewModule { }

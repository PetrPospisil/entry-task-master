import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingModule } from 'angular-star-rating';
import { RatingsAvgModule } from '../../pipes/ratings-avg/ratings-avg.module';
import { RecipeStarRatingComponent } from './recipe-star-rating.component';

@NgModule({
  declarations: [RecipeStarRatingComponent],
  exports: [RecipeStarRatingComponent],
  imports: [
    CommonModule,
    StarRatingModule,
    RatingsAvgModule
  ]
})
export class RecipeStarRatingModule { }

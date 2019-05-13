import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsAvgPipe } from './ratings-avg.pipe';

@NgModule({
  declarations: [RatingsAvgPipe],
  imports: [
    CommonModule
  ],
  exports: [RatingsAvgPipe]
})
export class RatingsAvgModule { }

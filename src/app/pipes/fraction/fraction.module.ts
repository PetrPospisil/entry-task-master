import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FractionPipe } from './fraction.pipe';

@NgModule({
  declarations: [FractionPipe],
  imports: [
    CommonModule
  ],
  exports: [FractionPipe]
})
export class FractionModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnpackDirective } from './unpack.directive';

@NgModule({
  declarations: [UnpackDirective],
  imports: [
    CommonModule
  ],
  exports: [UnpackDirective]
})
export class UnpackModule { }

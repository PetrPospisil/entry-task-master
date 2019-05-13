import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePickerComponent } from './image-picker.component';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';

@NgModule({
  declarations: [ImagePickerComponent],
  exports: [ImagePickerComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
  ]
})
export class ImagePickerModule { }

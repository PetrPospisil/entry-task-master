import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { ImagePickerModule } from '../../components/image-picker/image-picker.module';
import { AuthorFormComponent } from './author-form.component';

@NgModule({
  declarations: [AuthorFormComponent],
  entryComponents: [AuthorFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ImagePickerModule,
  ]
})
export class AuthorFormModule { }

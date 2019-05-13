import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorNamesPipe } from './author-names.pipe';

@NgModule({
  declarations: [AuthorNamesPipe],
  imports: [
    CommonModule
  ],
  exports: [AuthorNamesPipe]
})
export class AuthorNamesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WordCaseComponent } from './word-case.component';

@NgModule({
  declarations: [
    WordCaseComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class WordCaseModule {
}

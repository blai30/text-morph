import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class AboutModule { }

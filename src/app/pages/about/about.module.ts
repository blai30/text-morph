import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MarkdownModule.forChild(),
  ],
})
export class AboutModule { }

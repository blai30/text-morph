import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared';
import { WordCaseModule } from './word-case/word-case.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found';
import { MarkdownModule } from 'ngx-markdown';
import { AboutModule } from './about/about.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MarkdownModule.forRoot(),
    SharedModule,
    AppRoutingModule,
    WordCaseModule,
    AboutModule,
  ],
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(router: Router) {
  }
}

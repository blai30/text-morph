import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared';
import { AboutModule } from './about/about.module';
import { NotFoundComponent } from './not-found';
import { WordCaseModule } from './word-case/word-case.module';
import { NumbersModule } from './numbers/numbers.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MarkdownModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    AboutModule,
    WordCaseModule,
    NumbersModule,
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

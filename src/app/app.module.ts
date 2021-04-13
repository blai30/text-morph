import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './components/shared';
import { AboutModule } from './pages/about/about.module';
import { NotFoundComponent } from './pages/not-found';
import { WordCaseModule } from './pages/word-case/word-case.module';
import { NumbersModule } from './pages/numbers/numbers.module';

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

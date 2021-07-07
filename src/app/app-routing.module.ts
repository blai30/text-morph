import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategyService } from './services';
import { NotFoundComponent } from './pages/not-found';
import { AboutComponent } from './pages/about';
import { WordCaseComponent } from './pages/word-case';
import { NumbersComponent } from './pages/numbers';
import { PasswordComponent } from './pages/password';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/wordcase',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'wordcase',
    component: WordCaseComponent,
  },
  {
    path: 'numbers',
    component: NumbersComponent,
  },
  {
    path: 'password',
    component: PasswordComponent,
  },
  // Must be last to catch all invalid routes.
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: SelectivePreloadingStrategyService,
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

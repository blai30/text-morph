import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategyService } from "./services";
import { PageNotFoundComponent } from "./page-not-found";
import { WordCaseComponent } from "./word-case";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/wordcase',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
  {
    path: 'wordcase',
    component: WordCaseComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false,
        preloadingStrategy: SelectivePreloadingStrategyService,
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

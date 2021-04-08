import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategyService } from "./services";
import { NotFoundComponent } from "./not-found";
import { WordCaseComponent } from "./word-case";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/wordcase',
    pathMatch: 'full',
  },
  {
    path: 'wordcase',
    component: WordCaseComponent,
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

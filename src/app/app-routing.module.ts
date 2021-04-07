import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordCaseComponent } from "./word-case/word-case.component";

const routes: Routes = [
  {
    path: '',
    component: WordCaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

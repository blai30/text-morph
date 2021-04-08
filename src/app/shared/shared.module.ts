import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FooterComponent, HeaderComponent, SidebarComponent } from "./layout";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
  ]
})
export class SharedModule {
}

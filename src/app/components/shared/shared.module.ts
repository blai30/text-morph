import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DarkToggleComponent, FooterComponent, HeaderComponent, SidebarComponent } from "./layout";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [
    DarkToggleComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  exports: [
    DarkToggleComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
  ],
})
export class SharedModule {
}

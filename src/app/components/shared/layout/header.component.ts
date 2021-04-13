import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  menuOpen = false;

  ngOnInit(): void {
    // TODO: Initialize the user.
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}

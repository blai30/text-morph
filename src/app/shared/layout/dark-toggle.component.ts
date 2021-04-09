import { Component, OnInit } from '@angular/core';
import { ThemeService } from "../../services/theme.service";

@Component({
  selector: 'app-dark-toggle',
  templateUrl: './dark-toggle.component.html',
})
export class DarkToggleComponent implements OnInit {

  constructor(
    private themeService: ThemeService,
  ) { }

  ngOnInit(): void {
  }

  onDarkToggle(): void {
    this.themeService.toggleTheme();
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDark: boolean;

  constructor() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      this.isDark = true;
    } else {
      document.documentElement.classList.remove('dark');
      this.isDark = false;
    }
  }

  toggleTheme(): void {
    if (this.isDark) {
      document.documentElement.classList.remove('dark');
      this.isDark = false;
    } else {
      document.documentElement.classList.add('dark');
      this.isDark = true;
    }

    localStorage.theme = this.isDark ? 'dark' : 'light';
  }
}

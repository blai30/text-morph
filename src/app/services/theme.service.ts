import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor() {
    this.initTheme();
    // Watch for change in system theme preference.
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });
  }

  getCurrentTheme(): string {
    if ('theme' in localStorage) {
      return localStorage.theme;
    }
    return 'system';
  }

  initTheme(): void {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  toggleTheme(enabled: boolean): void {
    if (enabled) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }

  resetTheme(): void {
    localStorage.removeItem('theme');
    this.initTheme();
  }
}

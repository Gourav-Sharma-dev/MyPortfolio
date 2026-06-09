import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark' | 'system';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private readonly STORAGE_KEY = 'portfolio-theme';

  theme = signal<Theme>('system');
  isDark = signal<boolean>(false);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem(this.STORAGE_KEY) as Theme | null;
      this.theme.set(saved ?? 'system');
      this.applyTheme(this.theme());

      // Watch system preference changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (this.theme() === 'system') this.applyTheme('system');
      });

      effect(() => {
        const t = this.theme();
        localStorage.setItem(this.STORAGE_KEY, t);
        this.applyTheme(t);
      });
    }
  }

  setTheme(t: Theme): void {
    this.theme.set(t);
  }

  private applyTheme(t: Theme): void {
    const dark =
      t === 'dark' ||
      (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    this.isDark.set(dark);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }
}

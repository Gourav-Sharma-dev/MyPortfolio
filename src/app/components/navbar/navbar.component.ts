import { Component, inject, signal } from '@angular/core';
import { ThemeService, Theme } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  scrolled = signal(false);
  menuOpen = signal(false);

  navItems = [
    { id: '', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  themeOptions: { value: Theme; icon: string; label: string }[] = [
    { value: 'light', icon: 'bi-sun-fill', label: 'Light' },
    { value: 'dark', icon: 'bi-moon-fill', label: 'Dark' },
    { value: 'system', icon: 'bi-circle-half', label: 'System' },
  ];

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.scrolled.set(window.scrollY > 50);
      });
    }
  }
}

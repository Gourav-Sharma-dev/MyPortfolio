import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  data = inject(PortfolioDataService);

  getProjectIcon(type: string): string {
    return type === 'freelance' ? 'bi-building-check' : type === 'professional' ? 'bi-building' : 'bi-laptop';
  }
}

import { Component, inject, signal } from '@angular/core';
import { PortfolioDataService, Skill } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  data = inject(PortfolioDataService);
  activeCategory = signal('All');

  filteredSkills() {
    const cat = this.activeCategory();
    return cat === 'All' ? this.data.skills : this.data.skills.filter(s => s.category === cat);
  }

  onImgErr(event: Event, skill: Skill): void {
    skill.imgUrl = null;
  }
}

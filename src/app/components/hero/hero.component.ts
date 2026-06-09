import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})// ...existing imports...
export class HeroComponent implements AfterViewInit {
  data = inject(PortfolioDataService);
  imgError = signal(false);
  private typeAudio = new Audio('type.wav');

  typedNameText = '';
  private typingIndex = 0;
  private isDeleting = false;
  private cdr = inject(ChangeDetectorRef);

  private userInteracted = false;

  constructor() {
    // Listen for first user interaction
    window.addEventListener('click', this.enableSound, { once: true });
    window.addEventListener('keydown', this.enableSound, { once: true });
  }

  enableSound = () => {
    this.userInteracted = true;
  };

  playTypeSound() {
    if (!this.userInteracted) return; // Only play after user interaction
    this.typeAudio.currentTime = 0;
    this.typeAudio.play();
  }

  ngAfterViewInit() {
    this.typeWriter();
  }

  typeWriter() {
    const name = this.data.personal.name;
    if (!this.isDeleting && this.typingIndex < name.length) {
      this.typedNameText += name.charAt(this.typingIndex);
      this.typingIndex++;
      this.playTypeSound(); // Play sound on each character
      this.cdr.detectChanges();
      setTimeout(() => this.typeWriter(), 750);
    } else if (this.isDeleting && this.typingIndex > 0) {
      this.typedNameText = name.substring(0, this.typingIndex - 1);
      this.typingIndex--;
      this.cdr.detectChanges();
      setTimeout(() => this.typeWriter(), 100);
    } else {
      this.isDeleting = !this.isDeleting;
      setTimeout(() => this.typeWriter(), this.isDeleting ? 1000 : 500);
    }
  }
}
import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  data = inject(PortfolioDataService);
  submitStatus = signal<'idle' | 'loading' | 'success' | 'error'>('idle');

  private readonly SHEET_URL = 'https://script.google.com/macros/s/AKfycbxNW4uoKHcMXCBN6xKwg82bg5B0zbgya4ktclBvWr8ujLMSQ1YhYSCnc-Q4epk9x_sq3A/exec';

  contactItems = [
    { icon: 'bi-envelope-fill', label: 'Email', value: this.data.personal.email, href: 'mailto:' + this.data.personal.email, external: false },
    { icon: 'bi-telephone-fill', label: 'Phone', value: this.data.personal.phone, href: 'tel:' + this.data.personal.phone, external: false },
    { icon: 'bi-geo-alt-fill', label: 'Location', value: this.data.personal.location, href: '#', external: false },
  ];

  onSubmit(form: NgForm): void {
    if (form.invalid) return;
    const val = form.value;

    if (!this.SHEET_URL) {
      const subject = encodeURIComponent(val.subject || 'Portfolio Contact');
      const body = encodeURIComponent('Name: ' + val.name + '\nEmail: ' + val.email + '\nPhone: ' + (val.phone || 'N/A') + '\n\n' + val.message);
      window.open('mailto:' + this.data.personal.email + '?subject=' + subject + '&body=' + body, '_blank');
      return;
    }

    this.submitStatus.set('loading');
    const payload = {
      timestamp: new Date().toISOString(),
      name: val.name,
      email: val.email,
      phone: val.phone || '',
      subject: val.subject || '',
      message: val.message,
    };

    fetch(this.SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(() => {
        this.submitStatus.set('success');
        form.resetForm();
        setTimeout(() => this.submitStatus.set('idle'), 5000);
      })
      .catch(() => {
        this.submitStatus.set('error');
        setTimeout(() => this.submitStatus.set('idle'), 6000);
      });
  }
}

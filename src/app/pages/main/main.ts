import { Component, inject, signal } from '@angular/core';
import { Icon } from '../../util/icon/icon';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [Icon, FormsModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  private router = inject(Router);

  formData = {
    name: '',
    email: '',
    betreff: '',
    nachricht: '',
    datenschutz: false,
  };

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  routing(url: string) {
    this.router.navigate([url]).then(() => window.scrollTo(0, 0));
  }

  handleSpenden() {
    window.location.href = 'mailto:info@geschwister-weiss-stiftung.de?subject=Spende';
  }

  handleContactSubmit() {
    if (!this.formData.datenschutz) return;
    const subject = encodeURIComponent(this.formData.betreff || 'Kontaktanfrage');
    const body = encodeURIComponent(
      `Name: ${this.formData.name}\nE-Mail: ${this.formData.email}\n\n${this.formData.nachricht}`,
    );
    window.location.href = `mailto:info@geschwister-weiss-stiftung.de?subject=${subject}&body=${body}`;
  }
}

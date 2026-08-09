import { Component } from '@angular/core';
import { Icon } from '../../util/icon/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ueber-die-stiftung',
  imports: [Icon],
  templateUrl: './ueber-die-stiftung.html',
  styleUrl: './ueber-die-stiftung.scss',
})
export class UeberDieStiftung {
  constructor(private router: Router) {}

  routing(url: string) {
    this.router.navigate([url]).then(() => window.scrollTo(0, 0));
  }

  openDoc(path: string) {
    window.open(path, '_blank');
  }

  docs = [
    {
      title: 'Satzung',
      description: 'Die offizielle Satzung der Geschwister Weiß-Stiftung',
      icon: 'gavel',
      path: '/docs/satzung.pdf',
    },
    {
      title: 'Geschäftsordnung',
      description: 'Geschäftsordnung der Geschwister Weiß-Stiftung',
      icon: 'article',
      path: '/docs/geschaeftsordnung.pdf',
    },
    {
      title: 'Vertretungsbescheinigung',
      description: 'Offizielle Vertretungsbescheinigung der Stiftung',
      icon: 'badge',
      path: '/docs/vertretungsbescheinigung.pdf',
    },
    {
      title: 'Anerkennungsurkunde',
      description: 'Behördliche Anerkennungsurkunde der Stiftung',
      icon: 'workspace_premium',
      path: '/docs/anerkennungsurkunde.pdf',
    },
    {
      title: 'Freistellungsbescheid',
      description: 'Steuerlicher Freistellungsbescheid — Nachweis der Gemeinnützigkeit',
      icon: 'verified',
      path: '/docs/freistellungsbescheid.pdf',
    },
  ];

  kuratorium = [
    {
      name: 'Michael Breuer',
      rolle: 'Kuratoriumsvorsitzender',
      beschreibung:
        'Langjähriger Berater des Stifters Hartmut Weiß und Testamentsvollstrecker. Seit Gründung der Stiftung im Jahr 2021 Vorsitzender des Kuratoriums.',
      bild: '/images/people/michael-breuer.jpg',
    },
    {
      name: 'Werner Meuther',
      rolle: 'Kuratoriumsmitglied',
      beschreibung: 'Mitglied des Kuratoriums der Geschwister Weiß-Stiftung.',
      bild: '/images/people/werner-meuther.png',
    },
  ];

  vorstand = [
    {
      name: 'Felix Breuer',
      rolle: 'Vorstand',
      beschreibung: 'Vorstandsmitglied der Geschwister Weiß-Stiftung.',
      bild: '/images/people/felix-breuer.png',
    },
    {
      name: 'Manuel Kalb',
      rolle: 'Vorstand',
      beschreibung:
        'Vorstandsmitglied der Geschwister Weiß-Stiftung seit dem 01.10.2026. Nachfolger von John Bähr im Vorstand.',
      bild: '/images/people/manuel-kalb.jpg',
      badge: 'Ab 01.10.2026',
    },
  ];
}

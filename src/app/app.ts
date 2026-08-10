import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MenuModal } from './util/menu-modal/menu-modal';
import { Icon } from './util/icon/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Icon],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private dialog = inject(MatDialog);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  constructor() {
    if (this.isBrowser && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }

  ngOnInit() {
    if (!this.isBrowser) return;
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => this.forceScrollTop());
  }

  private forceScrollTop() {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        console.log('[scroll-fix] wird ausgeführt, scrollY vorher:', window.scrollY);
        const html = document.documentElement;
        const prev = html.style.scrollBehavior;
        html.style.scrollBehavior = 'auto';
        window.scrollTo(0, 0);
        document.body.scrollTop = 0; // Safari-Fallback
        html.style.scrollBehavior = prev;
        console.log('[scroll-fix] scrollY nachher:', window.scrollY);
      });
    });
  }

  scrollToSection(sectionId: string) {
    const url = this.router.url;
    if (url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.scroll(sectionId), 100);
      });
    } else {
      this.scroll(sectionId);
    }
  }

  private scroll(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  routing(url: string) {
    this.router.navigate([url]);
  }

  handleMenuButtonClick() {
    const ref = this.dialog.open(MenuModal, { panelClass: 'menu-modal' });
    ref.afterClosed().subscribe((id) => {
      if (id) this.scrollToSection(id);
    });
  }
}

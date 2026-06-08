import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MenuModal } from './util/menu-modal/menu-modal';
import { Icon } from './util/icon/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Icon],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private dialog = inject(MatDialog);
  private router = inject(Router);

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
    this.router.navigate([url]).then(() => window.scrollTo(0, 0));
  }

  handleMenuButtonClick() {
    const ref = this.dialog.open(MenuModal, { panelClass: 'menu-modal' });
    ref.afterClosed().subscribe((id) => {
      if (id) this.scrollToSection(id);
    });
  }
}

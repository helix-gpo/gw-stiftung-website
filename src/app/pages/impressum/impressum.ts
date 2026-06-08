import { Component } from '@angular/core';
import { Icon } from '../../util/icon/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-impressum',
  imports: [Icon],
  templateUrl: './impressum.html',
  styleUrl: './impressum.scss',
})
export class Impressum {
  constructor(private router: Router) {}
  routing(url: string) {
    this.router.navigate([url]).then(() => window.scrollTo(0, 0));
  }
}

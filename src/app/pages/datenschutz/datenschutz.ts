import { Component } from '@angular/core';
import { Icon } from '../../util/icon/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datenschutz',
  imports: [Icon],
  templateUrl: './datenschutz.html',
  styleUrl: './datenschutz.scss',
})
export class Datenschutz {
  constructor(private router: Router) {}

  routing(url: string) {
    this.router.navigate([url]);
  }
}

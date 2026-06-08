import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Impressum } from './pages/impressum/impressum';
import { Datenschutz } from './pages/datenschutz/datenschutz';
import { UeberDieStiftung } from './pages/ueber-die-stiftung/ueber-die-stiftung';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'impressum', component: Impressum },
  { path: 'datenschutz', component: Datenschutz },
  { path: 'ueber-die-stiftung', component: UeberDieStiftung },
  { path: '**', redirectTo: '' },
];

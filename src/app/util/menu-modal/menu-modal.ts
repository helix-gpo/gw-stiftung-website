import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-modal',
  imports: [],
  templateUrl: './menu-modal.html',
  styleUrl: './menu-modal.scss',
})
export class MenuModal {
  private dialogRef: MatDialogRef<MenuModal> = inject(MatDialogRef);
  private router = inject(Router);

  closeModal(element: string) {
    const routes = ['impressum', 'datenschutz', 'ueber-die-stiftung'];
    if (routes.includes(element)) {
      this.router.navigate([`/${element}`]).then(() => {
        this.dialogRef.close();
      });
    } else {
      this.dialogRef.close(element);
    }
  }
}

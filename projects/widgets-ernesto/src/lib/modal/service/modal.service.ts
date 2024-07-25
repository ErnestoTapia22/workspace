import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../components/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }

  open(title: string, content: string) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { title, content }
    });

    return dialogRef.afterClosed();
  }
}

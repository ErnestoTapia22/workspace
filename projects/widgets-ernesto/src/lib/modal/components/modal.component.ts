import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'lib-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() title: string = 'Default Title';
  @Output() onConfirm = new EventEmitter<void>();
  constructor(public dialogRef: MatDialogRef<ModalComponent>) { }

  confirm() {
    this.onConfirm.emit();
    this.dialogRef.close();
  }
}

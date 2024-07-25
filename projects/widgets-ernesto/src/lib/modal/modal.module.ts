import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './components/modal.component';



@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ModalModule { }

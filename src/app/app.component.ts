import { Component } from '@angular/core';
import { ModalService } from 'widgets-ernesto';

export interface PeriodicElement {
  id: number;
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Hydrogen' },
  { id: 2, name: 'Helium' },
  { id: 3, name: 'Lithium' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = ELEMENT_DATA;
  selectedData: PeriodicElement | null = null;

  constructor(private modalService: ModalService) { }

  openModal(element: PeriodicElement) {
    this.selectedData = element;
    console.log(this.selectedData);
    this.modalService.open('Detalle', `Name: ${element.name}`).subscribe(result => {
      console.log('Modal cerrado');
    });
  }

  handleConfirm() {
    console.log('Confirmed!');
  }
}

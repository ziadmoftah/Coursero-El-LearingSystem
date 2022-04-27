import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  mail: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen',  mail: 'H@gmail.com'},
  {name: 'Helium', mail: 'He@gmail.com'},
  {name: 'Lithium', mail: 'Li@gmail.com'},
  {name: 'Beryllium', mail: 'Be@gmail.com'},
  {name: 'Boron',  mail: 'B@gmail.com'},
  {name: 'Carbon', mail: 'C@gmail.com'},
  {name: 'Nitrogen',  mail: 'N@gmail.com'},
  {name: 'Oxygen', mail: 'O@gmail.com'},
  {name: 'Fluorine', mail: 'F@gmail.com'},
  {name: 'Neon', mail: 'Ne@gmail.com'},
];


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['name', 'mail'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  constructor() { }

  ngOnInit(): void {
  }
}

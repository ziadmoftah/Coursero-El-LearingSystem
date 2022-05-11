import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { UserService } from '../user.service';

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

var students = new Array<UserService>();
var faculty = new Array<UserService>(); 
var notVerified = new Array<UserService>(); 

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['name', 'mail'];
  dataSource = notVerified;
  clickedRows = new Set<PeriodicElement>();
  constructor(private dbManager: DatabaseService) { }

  ngOnInit(): void {
    /*
    let verifiedUsers = this.dbManager.getUsers(true);
    verifiedUsers.forEach(user => {
      if(user.type == "S")
        students.push(user);
        else{
          faculty.push(user);
        }
    })*/
    notVerified = this.dbManager.getUsers(false);
    console.log(notVerified);


  }

}

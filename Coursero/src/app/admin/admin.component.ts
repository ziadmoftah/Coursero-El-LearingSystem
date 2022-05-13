import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { UserService } from '../user.service';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['name', 'account'];
  dataSource: UserService []= UserDetailsService.notVerified;
  clicked_Notverified = new Set<UserService>();
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
  console.log(this.dataSource);    
  }
  verify()
  {
    this.clicked_Notverified.forEach(nverified => {
      this.dbManager.verifyUser(nverified);
    })
    
  }
}

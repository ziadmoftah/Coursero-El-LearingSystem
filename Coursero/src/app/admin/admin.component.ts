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
  dataSource: UserService [];
  dataSource2 : UserService [];
  dataSource_fuculty : UserService[];
  dataSource_Students : UserService[];
  clicked_Notverified = new Set<UserService>();
  clicked_faculty = new Set<UserService>();
  clicked_Student = new Set<UserService>();


  constructor(private dbManager: DatabaseService) { 

    this.dataSource = new Array<UserService>();
    this.dataSource = UserDetailsService.notVerified;
    this.dataSource2 = new Array<UserService>();
    this.dataSource2 = UserDetailsService.verifiedUsers;
    this.dataSource_fuculty = new Array<UserService>();
    this.dataSource_fuculty = this.dataSource2.filter(course => course.type == 'F');  
    this.dataSource_Students = new Array<UserService>();
    this.dataSource_Students = this.dataSource2.filter(course => course.type == 'S'); 
  }

  ngOnInit(): void {
     
  }
  verify()
  {
      this.clicked_Notverified.forEach(nverified => {
      this.dbManager.verifyUser(nverified);
      UserDetailsService.notVerified = UserDetailsService.notVerified.filter(person => person !== nverified);
      UserDetailsService.verifiedUsers.push(nverified);
      if(nverified.type == "S")
        this.dataSource_Students.push(nverified);
      else
        this.dataSource_fuculty.push(nverified);
    })
    this.clicked_Notverified.clear();
    this.dataSource = UserDetailsService.notVerified;
    this.dataSource2 = UserDetailsService.verifiedUsers;
    this.dataSource_fuculty = this.dataSource2.filter(course => course.type == 'F');  
    this.dataSource_Students = this.dataSource2.filter(course => course.type == 'S'); 
  }

  delete(type:string, isVerified:boolean)
  {
    console.log(isVerified);
    
    if(isVerified){
      if(type == "S"){
      this.clicked_Student.forEach(verified => {
        console.log(verified);
        this.dbManager.deleteUser(verified,true);
        UserDetailsService.verifiedUsers = UserDetailsService.verifiedUsers.filter(person => person !== verified);
      })
      }
      else
      {
        this.clicked_faculty.forEach(verified => {
          this.dbManager.deleteUser(verified,true);
          UserDetailsService.verifiedUsers = UserDetailsService.verifiedUsers.filter(person => person !== verified);
        })
      }
      
    }
    else
    {
      this.clicked_Notverified.forEach(nverified => {
        this.dbManager.deleteUser(nverified,false);
        UserDetailsService.notVerified = UserDetailsService.notVerified.filter(person => person !== nverified);
      })    
    }

    this.clicked_Notverified.clear();
    this.clicked_Student.clear();
    this.clicked_faculty.clear();
    this.dataSource = UserDetailsService.notVerified;
    this.dataSource2 = UserDetailsService.verifiedUsers;
    this.dataSource_fuculty = this.dataSource2.filter(course => course.type == 'F');  
    this.dataSource_Students = this.dataSource2.filter(course => course.type == 'S'); 
  }
}

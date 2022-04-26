import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string ;
  account:string;
  password:string;
  constructor() { 
    this.name = this.password = this.account = "" ; 
  }

  ngOnInit(): void {
  }

  FillData(name:string , account:string , password:string){
    this.name = name ; 
    this.account = account ; 
    this.password = password ; 
  }

  Get_Name():string{
    return this.name;
  }
  Get_Account():string{
    return this.account;
  }
  Get_Password():string{
    return this.password;
  }
}

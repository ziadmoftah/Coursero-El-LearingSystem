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
  type:string;

  constructor() { 
    this.name = this.password = this.account = this.type = "" ; 
  }

  ngOnInit(): void {
  }

  FillData(name:string , account:string , password:string, type:string){
    this.name = name ; 
    this.account = account ; 
    this.password = password ; 
    this.type = type;
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

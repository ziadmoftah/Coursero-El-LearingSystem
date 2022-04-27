import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  Users:UserComponent[] ;
  errorMessage:string = "" ;
  constructor() { 
    this.Users = [] ; 
  }

  ngOnInit(): void {
  }
  Register(name:string , account:string , password:string, type:string): Boolean {
    if ( name == ""|| account == "" || password == ""){   // Whether any text field is empty
      this.errorMessage = "Please Make Sure You Have Filled All The Fields" ;
      return false;
    }

    for (let i = 0; i < this.Users.length; i++) {  // Check if same Account already exists
      let currenUser:UserComponent = this.Users[i] ;
      if (currenUser.Get_Account() == account){
        this.errorMessage = "Account Already Used" ; 
        return false; 
      }
    }

    let newUser:UserComponent = new UserComponent() ;
    newUser.FillData(name , account , password, type ) ;
    this.Users.push(newUser);
    this.errorMessage = "User Registered Successfully" ;
    return true ; 
  }

  Login(account:string , password:string):Boolean {
    if (  account == "" || password == ""){   // Whether any text field is empty
      this.errorMessage = "Please Make Sure You Have Filled All The Fields" ;
      return false;
    }
    let isfound:boolean = false;
    for (let i = 0; i < this.Users.length; i++) {
      let currenUser:UserComponent = this.Users[i] ;
      if ( currenUser.Get_Account() == account ){
        isfound = true ; 
      }
      if (currenUser.Get_Account() == account && currenUser.Get_Password() != password){
        this.errorMessage = "Password Incorrect" ;
        return false;
      }
      if (currenUser.Get_Account() == account && currenUser.Get_Password() == password){
        this.errorMessage = "Valid User" ;
        return true;
      }
      
    }
    if (isfound == false ){
      this.errorMessage = "Invalid User" ; 
      return false;
    }
    this.errorMessage = "User Invalid" ; 
    return false ;
  }
}

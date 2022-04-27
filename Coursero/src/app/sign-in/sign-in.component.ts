import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  private authentication:AuthenticationService;
  public errorMessage:string;
  constructor() {
    this.authentication = new AuthenticationService();
    this.errorMessage = "";
   }

  ngOnInit(): void {
  }
  Login(account:string , password:string):Boolean
  {
    let ret :Boolean =  this.authentication.Login(account , password);
    this.errorMessage = this.authentication.getErrorMessage();
    return ret;
  }
  
}

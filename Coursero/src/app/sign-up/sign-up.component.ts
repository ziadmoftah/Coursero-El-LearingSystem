import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  private authentication:AuthenticationService;
  errorMessage:string;
  constructor() {
    this.authentication = new AuthenticationService();
    this.errorMessage = "";
   }

  ngOnInit(): void {
  }
  Register(name:string , account:string , password:string, s:boolean): Boolean
  {
    let type:string = "F" ;
    if ( s ) type = "S" ;
    let ret :Boolean =  this.authentication.Register(name , account , password , type);
    this.errorMessage = this.authentication.getErrorMessage();
    return ret;
  }

}

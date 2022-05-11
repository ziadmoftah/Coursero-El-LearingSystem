import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

import { Router } from '@angular/router';

import { DatabaseService } from '../database.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  private authentication:AuthenticationService;
  errorMessage:string;

  constructor(private router: Router,private dbManager: DatabaseService) {
    this.authentication = new AuthenticationService(dbManager);

    this.errorMessage = "";
   }

  ngOnInit(): void {
  }
  Login(account:string , password:string):Boolean
  {
    let ret :Boolean =  this.authentication.Login(account , password);
    this.errorMessage = this.authentication.getErrorMessage();
    if (ret){
      this.router.navigate(['/Home']);
    }
    return ret;
  }
  
}

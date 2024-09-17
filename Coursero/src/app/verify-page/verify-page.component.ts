import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-verify-page',
  templateUrl: './verify-page.component.html',
  styleUrls: ['./verify-page.component.css']
})
export class VerifyPageComponent implements OnInit {

  constructor(private http:HttpClient, private formBuilder: FormBuilder) { }
  User = "Mohamed";
  fName: string = "";
  lName: string = "";
  output:string = "";
  country:string = "US";
  lol : boolean = false;

  myForm: any;

  a = [
    {name :"a" , number:20},
    {name :"b", number:2},
    {name :"c" , number:80},
    {name :"d" , number:70},
    {name :"e" , number:60},
    {name :"f" , number:50},
    {name :"g" , number:30}
   ]

  public employees = [];
  ngOnInit(): void {
    //this._employeeService.getEmployees().subscribe(data => this.employees = data);
  
    this.myForm = this.formBuilder.group({
      name : ['',[Validators.required,Validators.minLength(3)]],
      email : ['',Validators.required, Validators.email],
      message: ''
    });
  }

  private url: string = "/assets/data/employees.json";

  matches()
  {
    this.lol = true;
  }
  getEmployees(): Observable<number[]>
  {
    return this.http.get<number[]>(this.url);
  }

  onSubmit(form: FormGroup)
  {
    console.log('Valid?', form.valid);
    console.log('Name', form.value.name);
  }
}

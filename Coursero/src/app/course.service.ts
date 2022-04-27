import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  name:string ;
  code:string;
  faculty:string;
  creditHour:string;

  constructor() { 
    this.name = this.code = this.faculty = this.creditHour = "" ; 
  }

  ngOnInit(): void {
  }

  FillData(name:string , code:string , faculty:string, creditHour:string){
    this.name = name ; 
    this.code = code ; 
    this.faculty = faculty ; 
    this.creditHour = creditHour;
  }

  Get_Name():string{
    return this.name;
  }
  Get_Code():string{
    return this.code;
  }
  Get_Faculty():string{
    return this.faculty;
  }
  Get_CreditHour():string
  {
    return this.creditHour;
  }
}

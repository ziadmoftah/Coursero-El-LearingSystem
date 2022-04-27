import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LecturesService {

  name:string ;
  date:Date;
  course:string;

  constructor() { 
    this.name = this.course = "" ; 
    this.date = new Date();
  }

  ngOnInit(): void {
  }

  FillData(name:string , course:string , date:Date){
    this.name = name ; 
    this.course = course ; 
    this.date = date;
  }

  Get_Name():string{
    return this.name;
  }
  Get_Course():string{
    return this.course;
  }
  Get_date():Date{
    return this.date;
  }
}

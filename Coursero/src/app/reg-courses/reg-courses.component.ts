import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { DatabaseService } from '../database.service';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-reg-courses',
  templateUrl: './reg-courses.component.html',
  styleUrls: ['./reg-courses.component.css']
})
export class RegCoursesComponent implements OnInit {

  coursess:CourseService[];


  constructor(private dbManager: DatabaseService) {  
    this.coursess = new Array<CourseService>();
    this.fillcourses();
  }

  ngOnInit(): void {
  }
  Reg (Coursename : string){
    this.dbManager.registerCourse(Coursename,UserDetailsService.userName);
    var temp = { 
      courseName:Coursename, 
      studentName:UserDetailsService.userName
   }; 
    this.coursess = this.coursess.filter(course => course.Get_Name() !== Coursename);
    UserDetailsService.registered.push(temp);
  }

  addCourse (Coursename : string, CourseCode: string, CourseHour:string){

    var course:CourseService = new CourseService();
    course.FillData(Coursename, CourseCode,UserDetailsService.userName,CourseHour);
    UserDetailsService.courses.push(course);
    this.dbManager.addCourse(course);

  }

  fillcourses()
  {




    let found:boolean;
    for (let i = 0; i < UserDetailsService.courses.length; i++) {
      found = false;
      for (let j = 0; j < UserDetailsService.registered.length; j++) {
        if(UserDetailsService.courses[i].name == UserDetailsService.registered[j].courseName && UserDetailsService.registered[j].studentName == UserDetailsService.userName) 
        {
          found = true;
        }
      }
      if(!found)
        this.coursess.push(UserDetailsService.courses[i]);
    }


  }

}

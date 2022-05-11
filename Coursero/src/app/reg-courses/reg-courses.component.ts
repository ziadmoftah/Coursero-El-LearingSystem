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
  course_name : string = "";
  course_code : string = "";
  course_hour : string = "";

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

  addCourse (){

    var course:CourseService = new CourseService();
    course.FillData(this.course_name, this.course_code,UserDetailsService.userName,this.course_hour);
    UserDetailsService.courses.push(course);
    this.dbManager.addCourse(course);
    
    this.course_name = "";
    this.course_hour = "";
    this.course_code = "";
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

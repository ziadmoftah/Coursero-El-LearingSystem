import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { DatabaseService } from '../database.service';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})


export class CoursesComponent implements OnInit {

  
  coursess:CourseService[];
  

  constructor() {
    
    this.coursess = new Array<CourseService>();
    this.fillcourses();
  }

  ngOnInit(): void {
    
  }

  setCourse(courseName:string)
  {
    UserDetailsService.course = courseName; 
  }
  fillcourses()
  {


    for (let i = 0; i < UserDetailsService.courses.length; i++) {
      for (let j = 0; j < UserDetailsService.registered.length; j++) {
        if(UserDetailsService.courses[i].name == UserDetailsService.registered[j].courseName && UserDetailsService.registered[j].studentName == UserDetailsService.userName) 
        {
          this.coursess.push(UserDetailsService.courses[i]);
        }
      }
    }
    
  }

}

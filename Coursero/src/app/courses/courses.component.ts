import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})


export class CoursesComponent implements OnInit {

  courses:CourseService[];
  coursess:CourseService[];

  constructor(private dbManager: DatabaseService) {
    this.courses = this.dbManager.getCourses();
    this.coursess = new Array<CourseService>();
  }

  ngOnInit(): void {
  }
  fillcourses()
  {
    var registered = this.dbManager.getRegistered();
    for (let i = 0; i < this.courses.length; i++) {
      for (let j = 0; j < registered.length; j++) {
        if(this.courses[i].name == registered[j].courseName && registered[j].studentName == "Mohamed")  //change Mohamed into global name
        {
          this.coursess.push(this.courses[i]);
        }
      }
    }
    
  }

}

import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-reg-courses',
  templateUrl: './reg-courses.component.html',
  styleUrls: ['./reg-courses.component.css']
})
export class RegCoursesComponent implements OnInit {

  courses:CourseService[];
  username : string = "";

  constructor(private dbManager: DatabaseService) {  
    this.courses = this.dbManager.getCourses();
  }

  ngOnInit(): void {
  }
  Reg (Coursename : string){
    this.dbManager.registerCourse(Coursename,this.username)
  }

}

import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { DatabaseService } from '../database.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})


export class CoursesComponent implements OnInit {

  courses:CourseService[];

  constructor(private dbManager: DatabaseService) {  
    this.courses = this.dbManager.getCourses();
  }

  ngOnInit(): void {
  }

}

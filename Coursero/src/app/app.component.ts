import { Component } from '@angular/core';
import { CourseService } from './course.service';
import { DatabaseService } from './database.service';
import { LecturesService } from './lectures.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coursero';
  constructor(private dbManager: DatabaseService){}

  databaseTest(){
    /*
    let userData = new UserComponent();
    userData.FillData("zaki" , "zaclone@shaco.lol" , "lol", "Student");
    this.dbManager.addUser(userData , false);
    */
    /*let courseData = new CourseService();
    courseData.FillData("League of legends","LOL","ASU","4");
    this.dbManager.addCourse(courseData);*/
    /*let date :Date = new Date();
    let lectureData = new LecturesService();
    lectureData.FillData("Lecture 1","Maths",date);
    this.dbManager.addLecture(lectureData);
    */
    var users = this.dbManager.getUsers(false);
    var courses = this.dbManager.getCourses();
    var lectures = this.dbManager.getLectures();
    console.log(lectures);
  }
}

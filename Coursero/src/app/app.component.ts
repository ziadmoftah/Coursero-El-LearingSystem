import { Component } from '@angular/core';
import { CourseService } from './course.service';
import { DatabaseService } from './database.service';
import { LecturesService } from './lectures.service';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coursero';
  constructor(private dbManager: DatabaseService){}

  databaseTest(){
    
    /*let userData = new UserService();
    userData.FillData("zaki el admin" , "admin" , "admin", "A");
    this.dbManager.addUser(userData , true);
    */
    /*let courseData = new CourseService();
    courseData.FillData("League of legends","LOL","ASU","4");
    this.dbManager.addCourse(courseData);*/
    /*let date :Date = new Date();
    let lectureData = new LecturesService();
    lectureData.FillData("Lecture 1","Maths",date);
    this.dbManager.addLecture(lectureData);
    */
    
    //this.dbManager.registerCourse("Math","Mohamed");
    var users = this.dbManager.getUsers(false);
    var courses = this.dbManager.getCourses();
    var lectures = this.dbManager.getLectures();
  }
}

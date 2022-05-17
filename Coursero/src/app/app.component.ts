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
    /*
    let userData = new UserService();
    userData.FillData("zaki el admin" , "admin" , "admin", "A");
    this.dbManager.addUser(userData , true);
    
    let userData1 = new UserService();
    userData1.FillData("Ahmed" , "ahmed@gmail.com" , "lotfy", "S");
    this.dbManager.addUser(userData1 , true);
    
    let userData2 = new UserService();
    userData2.FillData("Omar" , "omar@gmail.com" , "essam", "S");
    this.dbManager.addUser(userData2 , true);
    
    let userData3 = new UserService();
    userData3.FillData("Zaki" , "zaclone@gmail.com" , "zac", "S");
    this.dbManager.addUser(userData3 , true);
    
    let userData4 = new UserService();
    userData4.FillData("ASU" , "ASU@gmail.com" , "ASU", "F");
    this.dbManager.addUser(userData4 , true);
    /*let courseData = new CourseService();
    courseData.FillData("League of legends","LOL","ASU","4");
    this.dbManager.addCourse(courseData);*/
    /*let date :Date = new Date();
    let lectureData = new LecturesService();
    lectureData.FillData("Lecture 1","Maths",date);
    this.dbManager.addLecture(lectureData);
    */
    
    //this.dbManager.registerCourse("Math","Mohamed");
   // var users = this.dbManager.getUsers(false);
    //var courses = this.dbManager.getCourses();
    //var lectures = this.dbManager.getLectures();
    this.dbManager.updateTest();
  }
}

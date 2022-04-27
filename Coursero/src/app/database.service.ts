import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { CourseService } from './course.service';
import { LecturesService } from './lectures.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {


  private DBurl = "https://e-learning-system-c93f6-default-rtdb.europe-west1.firebasedatabase.app/";
  constructor(private httpClient: HttpClient) { }



  ngOnInit(): void {
  }


  addUser(user:UserService, verified:boolean){
    // add users to notverified db
    let address="";
    if (verified == true){
      address = this.DBurl+"Verified.json";
    }else{
      address = this.DBurl+"notVerified.json";
    }
    this.httpClient.post(address , user).subscribe(response => console.log("Success"));
  }

  verifyUser(user:UserService){
    // remove user from notVerified db and add to verified users db
    this.deleteUser(user , false);
    this.addUser(user , true)

  }
  deleteUser(user:UserService, verified:boolean){
    //if verified remove from verified db and if not remove from not verified
    if (verified == true){
      const address = this.DBurl+"Verified.json";
    }else{
      const address = this.DBurl+"notVerified.json";
    }

    // remove lesa ha3melha
  }
  getUsers(verified:boolean):UserService[]{
    let address="";
    if (verified == true){
      address = this.DBurl+"Verified.json";
    }else{
      address = this.DBurl+"notVerified.json";
    }

    var users = new Array<UserService>();
    this.httpClient.get<UserService[]>(address)
    .subscribe((data:UserService[]) => {
      Object.values(data).forEach(record => {
          users.push(record);
      })
    });
    
    
    console.log(address);
    console.log(users);
    return users;
  }
  addCourse(Course:CourseService){
    // add users to notverified db
    let address=this.DBurl+"Courses.json";
    this.httpClient.post(address , Course).subscribe(response => console.log("Success"));
  }
  getCourses():CourseService[]{
    let address=this.DBurl+"Courses.json";;
    

    var courses = new Array<CourseService>();
    this.httpClient.get<CourseService[]>(address)
    .subscribe((data:CourseService[]) => {
      Object.values(data).forEach(record => {
          courses.push(record);
      })
    });
    
    
    console.log(address);
    console.log(courses);
    return courses;
  }
  addLecture(Lecture:LecturesService){
    // add users to notverified db
    let address=this.DBurl+"Lectures.json";
    this.httpClient.post(address , Lecture).subscribe(response => console.log("Success"));
  }
  getLectures():LecturesService[]{
    let address=this.DBurl+"Courses.json";;
    

    var lectures = new Array<LecturesService>();
    this.httpClient.get<LecturesService[]>(address)
    .subscribe((data:LecturesService[]) => {
      Object.values(data).forEach(record => {
          lectures.push(record);
      })
    });
    
    
    console.log(address);
    console.log(lectures);
    return lectures;
  }
  registerCourse(courseName:string, studentName:string){
    // add users to notverified db
    let temp = {courseName,studentName}
    let address=this.DBurl+"RegisteredCourses.json";
    this.httpClient.post(address , temp).subscribe(response => console.log("Success"));
  }
}

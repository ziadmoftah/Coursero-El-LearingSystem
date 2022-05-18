import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserService } from './user.service';
import { CourseService } from './course.service';
import { LecturesService } from './lectures.service';
import { CoursesComponent } from './courses/courses.component';
import { Observable } from 'rxjs';
import { UserDetailsService } from './user-details.service';

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
        var user:UserService = new UserService();
        user.account = record.account;
        user.name = record.name;
        user.password = record.password;
        user.type = record.type;
        users.push(user);
      })
    });
    
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
          var course:CourseService = new CourseService();
          course.code = record.code;
          course.creditHour = record.creditHour;
          course.faculty = record.faculty;
          course.name = record.name;
          courses.push(course);
      })
    });
    
    return courses;
  }
  addLecture(Lecture:LecturesService){
    // add users to notverified db
    let address=this.DBurl+"Lectures.json";
    this.httpClient.post(address , Lecture).subscribe(response => console.log("Success"));
  }
  getLectures():LecturesService[]{
    let address=this.DBurl+"Lectures.json";;
    

    var lectures = new Array<LecturesService>();
    this.httpClient.get<LecturesService[]>(address)
    .subscribe((data:LecturesService[]) => {
      Object.values(data).forEach(record => {
        var lecture:LecturesService = new LecturesService();
        lecture.course = record.course;
        lecture.date = record.date;

        lecture.name = record.name;
        lectures.push(lecture);

      })
    });
    
    return lectures;
  }
  registerCourse(courseName:string, studentName:string){
    // add users to notverified db
    let temp = {courseName,studentName}
    let address=this.DBurl+"RegisteredCourses.json";
    this.httpClient.post(address , temp).subscribe(response => console.log("Success"));
  }
  getRegistered():{courseName:string,studentName:string}[]{
    let address=this.DBurl+"RegisteredCourses.json";

    var courses = new Array<{courseName:string,studentName:string}>();
    this.httpClient.get<{courseName:string,studentName:string}[]>(address)
    .subscribe((data:{courseName:string,studentName:string}[]) => {
      Object.values(data).forEach(record => {
          courses.push(record);
      })
    });

    return courses;
  }
  registerLecture(lectureName:string, courseName:string){
    // add users to notverified db
    let temp = {lectureName,courseName}
    let address=this.DBurl+"RegisteredLectures.json";
    this.httpClient.post(address , temp).subscribe(response => console.log("Success"));
  }
  getRegisteredLectures():{lectureName:string, courseName:string}[]{
    let address=this.DBurl+"RegisteredLectures.json";

    var lectures = new Array<{lectureName:string, courseName:string}>();
    this.httpClient.get<{lectureName:string, courseName:string}[]>(address)
    .subscribe((data:{lectureName:string, courseName:string}[]) => {
      Object.values(data).forEach(record => {
          lectures.push(record);
      })
    });

    return lectures;
  }
  verifyUser(user:UserService){
    this.addUser(user , true);
    this.deleteUser(user , false);
  }
  deleteUser(user:UserService , verified:boolean){
    let address="";
    if (verified == true){
      address = this.DBurl+"Verified";
    }else{
      address = this.DBurl+"notVerified";
    }
    
    this.httpClient.get(address + ".json").subscribe(response => {
      let counter = 0;
      let index = -1;
      Object.values(response).forEach(lol => {
        if(Object.values(lol)[0] == user.Get_Account()){
          index = counter;
        }
        counter++;
      })
      let counter1 = 0;
      Object.keys(response).forEach(lol => {
        if(counter1 == index){
          this.httpClient.delete(address + "/" + lol + ".json").subscribe();
        }
        counter1++;
      })
    });
  }

  updateTest(){
    /*
    const httpOtpions = {
      headers: new HttpHeaders({
        'Content-Type': "application/json",
        'Access-Control-Allow-Origin': '*',
      })
    }
    //this.httpClient.get("https://e-learning-system-c93f6-default-rtdb.europe-west1.firebasedatabase.app/Courses/-N0fybDkASLvKhNDQh3o", httpOtpions).subscribe();
    let options = {params: new HttpParams().set('orderBy', 'name').set("equalTo" , "Ahmed")};
    /*
    this.httpClient.delete(this.DBurl + "test.json/", {headers : new HttpHeaders({
      'Content-Type': "application/json",
      'Access-Control-Allow-Origin': '*',
    }) , params : new HttpParams().set('name', '"Ahmed"') }).subscribe();
    */
    /*
    this.httpClient.post(this.DBurl + "test.json" , {"ID": "Abc" , "name":"lol"}).subscribe();
    this.httpClient.post(this.DBurl + "test.json" , {"ID": "Abc" , "name":"Ahmed"}).subscribe();
  
    
    this.httpClient.get(this.DBurl + "Verified.json").subscribe(response => {
      let counter = 0;
      let index = -1;
      Object.values(response).forEach(lol => {
        if(Object.values(lol)[1] == "Ahmed"){
          index = counter;
        }
        console.log(Object.values(lol)[0]);
        counter++;
      })
      let counter1 = 0;
      Object.keys(response).forEach(lol => {
        if(counter1 == index){
          this.httpClient.delete(this.DBurl + "test/" + lol + ".json").subscribe();
        }
        counter1++;
      })
    });
    */
   let lol = new UserService() ; 
   lol.FillData("yasser@gmail.com" , "yasser","rashid" , "S") 
   //this.addUser(lol,true);
   console.log(lol);
   this.deleteUser(lol, true);
  }
  
}
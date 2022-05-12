import { Component, OnInit } from '@angular/core';
import { LecturesService } from '../lectures.service';
import { DatabaseService } from '../database.service';
import { UserDetailsService } from '../user-details.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  lecs :LecturesService[];

  lec_name :string = "";
  lec_date :Date;
  type:string;

  constructor(private dbManager: DatabaseService , public datepipe: DatePipe) {  
    this.lec_date = new Date();
    this.datepipe.transform(this.lec_date, 'yyyy-MM-dd');
    this.type = UserDetailsService.type;
    this.lecs = new Array<LecturesService>();
    this.fillLectures();
  }

  ngOnInit(): void {
  }

  checkType():Boolean
  {
    return this.type == "F";
  }

  add_lec (){
    var lec_added:LecturesService = new LecturesService();
    lec_added.FillData (this.lec_name ,UserDetailsService.course, this.lec_date);
    UserDetailsService.lectures.push(lec_added);
    this.dbManager.addLecture(lec_added);  

    this.dbManager.registerLecture(this.lec_name,UserDetailsService.course);
    var temp = { 
      lectureName:this.lec_name, 
      courseName:UserDetailsService.course
    }; 
    UserDetailsService.registeredlecs.push(temp);
  }

  fillLectures()
  {

    for (let i = 0; i < UserDetailsService.lectures.length; i++) {
      for (let j = 0; j < UserDetailsService.registeredlecs.length; j++) {
        if(UserDetailsService.lectures[i].name == UserDetailsService.registeredlecs[j].lectureName && UserDetailsService.registeredlecs[j].courseName == UserDetailsService.course && UserDetailsService.lectures[i].course == UserDetailsService.course) 
        {
          this.lecs.push(UserDetailsService.lectures[i]);
        }
      }
    }
    console.log(this.lecs);

  }
}

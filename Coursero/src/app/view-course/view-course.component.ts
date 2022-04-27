import { Component, OnInit } from '@angular/core';
import { LecturesService } from '../lectures.service';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  lecs :LecturesService[];

  lec_name :string = "";
  lec_date :Date;
  lec_added :LecturesService;

  constructor(private dbManager: DatabaseService) {  
    this.lecs = this.dbManager.getLectures();
    this.lec_date = new Date();
    this.lec_added = new LecturesService ();
  }

  ngOnInit(): void {
  }

  add_lec (){
    this.lec_added.FillData (this.lec_name ,"Course",this.lec_date);
   this.dbManager.addLecture(this.lec_added);  
  }
}

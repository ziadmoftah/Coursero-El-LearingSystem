import { Component, OnInit } from '@angular/core';
import { LecturesService } from '../lectures.service';
import { DatabaseService } from '../database.service';
import { UserDetailsService } from '../user-details.service';

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
  type:string;

  constructor(private dbManager: DatabaseService) {  
    this.lecs = this.dbManager.getLectures();
    this.lec_date = new Date();
    this.lec_added = new LecturesService ();
    this.type = UserDetailsService.type;
    this.lecs = new Array<LecturesService>();
  }

  ngOnInit(): void {
  }


  add_lec (){
    var lec_added:LecturesService = new LecturesService();
    lec_added.FillData (this.lec_name ,UserDetailsService.course,this.lec_date);
    this.dbManager.addLecture(lec_added);  
  }
}

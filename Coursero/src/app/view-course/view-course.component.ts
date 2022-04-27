import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  course_lecs: Array<{date : string,name: string} > = [

    {date : '20/05/2021', name:'Superman'},
    {date : '20/05/2021', name:'Batman'},
    {date : '20/05/2021', name:'BatGirl'},
    {date : '20/05/2021', name:'Robin'},
    {date : '20/05/2021', name:'Flash'}
 
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

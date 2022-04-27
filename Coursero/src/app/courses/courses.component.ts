import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})


export class CoursesComponent implements OnInit {

  user_course: Array<{code : string,name: string, hours: number} > = [

    {code : 'DFEDF' ,hours: 1, name:'Superman'},
    {code : 'DTYRT' ,hours: 2, name:'Batman'},
    {code : 'NHDFC' ,hours: 5, name:'BatGirl'},
    {code : 'IYTOY' ,hours: 3, name:'Robin'},
    {code : 'WPGRR' ,hours: 4, name:'Flash'}
 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

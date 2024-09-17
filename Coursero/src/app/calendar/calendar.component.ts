import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; 
import { UserDetailsService } from '../user-details.service';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  Events: any[] = [

    {
      title: UserDetailsService.lectures[0].name,
      start: UserDetailsService.lectures[0].date
    },
    {
      title: UserDetailsService.lectures[1].name,
      start: UserDetailsService.lectures[1].date
    },
  ];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    
    events:[

      {
        title: UserDetailsService.lectures[0].name,
        start: UserDetailsService.lectures[0].date
      },
      {
        title: UserDetailsService.lectures[1].name,
        start: UserDetailsService.lectures[1].date
      },
      {
        title: UserDetailsService.lectures[2].name,
        start: UserDetailsService.lectures[2].date
      },
      {
        title: UserDetailsService.lectures[3].name,
        start: UserDetailsService.lectures[3].date
      },
      {
        title: UserDetailsService.lectures[4].name,
        start: UserDetailsService.lectures[4].date
      },
      {
        title: UserDetailsService.lectures[5].name,
        start: UserDetailsService.lectures[5].date
      },
      {
        title: UserDetailsService.lectures[6].name,
        start: UserDetailsService.lectures[6].date
      },
      {
        title: UserDetailsService.lectures[7].name,
        start: UserDetailsService.lectures[7].date
      },
      {
        title: UserDetailsService.lectures[8].name,
        start: UserDetailsService.lectures[8].date
      },
      {
        title: UserDetailsService.lectures[9].name,
        start: UserDetailsService.lectures[9].date
      },
    ]
  };
  handleDateClick(arg:any) {
    alert('Date click  :  ' + arg.dateStr)
    
  }
  constructor() {  }

  ngOnInit(): void {

  
  }

}

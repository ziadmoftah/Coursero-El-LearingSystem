import { Component, OnInit,NgModule } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; 
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'};
  constructor() { }

  ngOnInit(): void {
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseService } from './database.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegCoursesComponent } from './reg-courses/reg-courses.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction' ;
import dayGridPlugin from '@fullcalendar/daygrid' ;
import { AdminComponent } from './admin/admin.component';
import { UserService } from './user.service';
import { AuthenticationService } from './authentication.service';
import { DatePipe } from '@angular/common';
import { CourseService } from './course.service';
import { FormsModule } from '@angular/forms';
import { VerifyPageComponent } from './verify-page/verify-page.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'SignIn', component: SignInComponent },
  { path: 'SignUp', component: SignUpComponent },
  { path: 'Home', component: HomePageComponent },
  { path: 'Course', component: CoursesComponent },
  { path: 'ViewCourse', component: ViewCourseComponent },
  { path: 'RegisterCourse', component: RegCoursesComponent },
  { path: 'Calender', component: CalendarComponent },
  { path: 'Admin', component: AdminComponent },
  { path: 'Page', component: VerifyPageComponent},
  { path: '', redirectTo: '/SignIn', pathMatch: 'full' }

];




FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CoursesComponent,
    HomePageComponent,
    RegCoursesComponent,
    SignInComponent,
    SignUpComponent,
    ViewCourseComponent,
    AdminComponent,
    CalendarComponent,
    VerifyPageComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatTableModule,
    FullCalendarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatabaseService, UserService, AuthenticationService, CourseService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

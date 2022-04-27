import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

import { AdminComponent } from './admin/admin.component';

import { UserService } from './user.service';
import { AuthenticationService } from './authentication.service';
import { CourseService } from './course.service';

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
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule

  ],
  providers: [DatabaseService, UserService, AuthenticationService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { CourseService } from './course.service';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export abstract class UserDetailsService {

  public static userName:string;
  public static type:string;
  public static course:string;
  public static courses:CourseService[];
  public static registered:{courseName:string,studentName:string}[];
  constructor(private dbManager: DatabaseService) {
    UserDetailsService.userName = UserDetailsService.type = UserDetailsService.course = "";
    UserDetailsService.courses = this.dbManager.getCourses();
   }

    
}

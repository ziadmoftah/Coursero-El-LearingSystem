import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class UserDetailsService {

  public static userName:string;
  public static type:string;
  public static course:string;
  constructor() {
    UserDetailsService.userName = UserDetailsService.type = UserDetailsService.course = "";
   }

    
}

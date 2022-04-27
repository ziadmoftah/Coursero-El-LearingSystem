import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-database-manager',
  templateUrl: './database-manager.component.html',
  styleUrls: ['./database-manager.component.css']
})
export class DatabaseManagerComponent implements OnInit {
  DBurl = "https://e-learning-system-c93f6-default-rtdb.europe-west1.firebasedatabase.app/";
  constructor(private httpClient: HttpClient) { }



  ngOnInit(): void {
  }


  addUser(user:User, verified:boolean){
    // add users to notverified db
    let address="";
    if (verified == true){
      address = this.DBurl+"Verified.json";
    }else{
      address = this.DBurl+"notVerified.json";
    }
    this.httpClient.post(address , user);
  }

  verifyUser(user:User){
    // remove user from notVerified db and add to verified users db
    this.deleteUser(user , false);
    this.addUser(user , true)

  }
  deleteUser(user:User, verified:boolean){
    //if verified remove from verified db and if not remove from not verified
    if (verified == true){
      const address = this.DBurl+"Verified.json";
    }else{
      const address = this.DBurl+"notVerified.json";
    }

    // remove lesa ha3melha
  }
  getUsers(verified:boolean):User[]{
    let address="";
    if (verified == true){
      address = this.DBurl+"Verified.json";
    }else{
      address = this.DBurl+"notVerified.json";
    }

    let users = new Array<User>();
    this.httpClient.get<User[]>(address).subscribe((data:User[]) => {users = data});
    return users;
  }


}
class User{
  username:string;
  password:string;
  role:string;

  constructor(un:string , pw:string , role:string){
    this.username = un;
    this.password = pw;
    this.role = role
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserComponent } from './user/user.component';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {


  private DBurl = "https://e-learning-system-c93f6-default-rtdb.europe-west1.firebasedatabase.app/";
  constructor(private httpClient: HttpClient) { }



  ngOnInit(): void {
  }


  addUser(user:UserComponent, verified:boolean){
    // add users to notverified db
    let address="";
    if (verified == true){
      address = this.DBurl+"Verified.json";
    }else{
      address = this.DBurl+"notVerified.json";
    }
    this.httpClient.post(address , user).subscribe(response => console.log("Success"));
  }

  verifyUser(user:UserComponent){
    // remove user from notVerified db and add to verified users db
    this.deleteUser(user , false);
    this.addUser(user , true)

  }
  deleteUser(user:UserComponent, verified:boolean){
    //if verified remove from verified db and if not remove from not verified
    if (verified == true){
      const address = this.DBurl+"Verified.json";
    }else{
      const address = this.DBurl+"notVerified.json";
    }

    // remove lesa ha3melha
  }
  getUsers(verified:boolean):UserComponent[]{
    let address="";
    if (verified == true){
      address = this.DBurl+"Verified.json";
    }else{
      address = this.DBurl+"notVerified.json";
    }

    var users = new Array<UserComponent>();
    this.httpClient.get<UserComponent[]>(address)
    .subscribe((data:UserComponent[]) => {
      Object.values(data).forEach(record => {
          users.push(record);
      })
    });
    
    
    console.log(address);
    console.log(users);
    return users;
  }

}

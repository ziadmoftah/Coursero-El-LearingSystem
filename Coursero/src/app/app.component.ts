import { Component } from '@angular/core';
import { DatabaseManagerComponent } from './database-manager/database-manager.component';
import { DatabaseService } from './database.service';
import { UserComponent } from './user/user.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coursero';
  constructor(private dbManager: DatabaseService){}

  databaseTest(){
    /*
    let userData = new UserComponent();
    userData.FillData("zaki" , "zaclone@shaco.lol" , "lol", "Student");
    this.dbManager.addUser(userData , false);
    */
    var users = this.dbManager.getUsers(false);
    console.log(users);
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DatabaseManagerComponent } from './database-manager/database-manager.component';
import { DatabaseService } from './database.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AuthenticationComponent,
    DatabaseManagerComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

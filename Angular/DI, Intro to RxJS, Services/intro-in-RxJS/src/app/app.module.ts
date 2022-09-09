import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { TimeComponent } from './time/time.component';

export const myStringInjectionToken = new InjectionToken('myString');
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserListItemComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    // {
    //   provide: UserService,
    //   useClass: UserService
    // },
    {
      provide: myStringInjectionToken,
      useValue: 'HELLO WORLD!'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

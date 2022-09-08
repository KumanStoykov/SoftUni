import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserService } from './user.service';

export const myStringInjectionToken = new InjectionToken('myString');
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    //
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

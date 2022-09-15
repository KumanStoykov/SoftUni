import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserListItemComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    UserListComponent,
    HttpClientModule,
  ]
})
export class UserModule { }

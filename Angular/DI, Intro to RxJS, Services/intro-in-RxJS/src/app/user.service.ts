import { Injectable } from '@angular/core';
import { IUser } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  users = [
    {
      name: 'Ivan 1',
      age: 21
    },
    {
      name: 'Ivan 2',
      age: 22
    },
    {
      name: 'Ivan 3',
      age: 23
    },
  ];

  constructor() { }

  addNewUserHandler(newUser: IUser): void {
    if (newUser.name !== '' && newUser.age > 0) {
      this.users = this.users.concat(newUser);
    }
  }
}

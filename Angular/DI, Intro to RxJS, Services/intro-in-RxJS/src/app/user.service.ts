import { Inject, Injectable } from '@angular/core';
import { myStringInjectionToken } from './app.module';
import { IUser } from './interfaces/user';

@Injectable()

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

  constructor(@Inject(myStringInjectionToken) myString: string) {
    console.log(myString);
  }

  addNewUserHandler(newUser: IUser): void {
    if (newUser.name !== '' && newUser.age > 0) {
      this.users = this.users.concat(newUser);
    }
  }
}

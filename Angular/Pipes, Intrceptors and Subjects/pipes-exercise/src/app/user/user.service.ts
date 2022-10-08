import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../shared/interfaces/user';

@Injectable()

export class UserService {

  constructor(private http: HttpClient) { }

  loadUsers(search: string = '') {
    const query = search ? `?email_like=${search}` : '';
    return this.http.get<IUser[]>(`/api/users${query}`);
}

loadUser(id: number) {
      return this.http.get<IUser>(`/api/users/${id}`);

  }
 }

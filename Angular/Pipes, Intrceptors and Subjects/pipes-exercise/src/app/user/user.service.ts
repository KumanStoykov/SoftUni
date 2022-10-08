import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../shared/interfaces/user';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class UserService {

    private users = new BehaviorSubject<IUser[] | null>(null);
    users$ = this.users.asObservable();

    private user = new BehaviorSubject<IUser | null>(null);
    user$ = this.user.asObservable();

    constructor(private http: HttpClient) { }

    loadUsers = (search: string = '') => {
        const query = search ? `?email_like=${search}` : '';

        this.users.next(null);

        this.http.get<IUser[]>(`/api/users${query}`).subscribe(
            (users) => this.users.next(users)
        );
    }

    loadUser = (id: number) => {
        this.user.next(null);

        this.http.get<IUser>(`/api/users/${id}`).subscribe(
            (user) => this.user.next(user)
        );;

    }
}

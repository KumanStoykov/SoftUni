import { Component, OnInit } from '@angular/core';
import { mergeMap, switchMap } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from '../user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    users$ = this.userService.users$;
    errorLoadingUsers = false;


    constructor(public userService: UserService) { }

    ngOnInit(): void {
        this.loadUsers();
    }

    loadUsers = this.userService.loadUsers;

    searchButtonHandler(searchInput: HTMLInputElement) {
        const { value } = searchInput;
        this.loadUsers(value);
    }

}

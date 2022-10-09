import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from '../user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements AfterViewInit {

    @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

    users$ = this.userService.users$;
    errorLoadingUsers = false;

    loadUsers = this.userService.loadUsers;

    constructor(public userService: UserService) {

        this.loadUsers();
    }

    ngAfterViewInit(): void {
        fromEvent(this.searchInput.nativeElement, 'input')
            .pipe(
                map((e) => (e.target as HTMLInputElement).value),
                debounceTime(700),
                distinctUntilChanged()
            )
            .subscribe((value) => this.loadUsers(value));
    }


    searchButtonHandler(searchInput: HTMLInputElement) {
        const { value } = searchInput;
        this.loadUsers(value);
    }

}

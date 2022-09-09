import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IUser } from './interfaces/user';
import { UserService } from './user.service';

// import { of } from 'rxjs';
// import { map } from 'rxjs/operators';

// of(1000, 100, 200)
//   .pipe(map(x => x + 100))
//   .subscribe((x) => {
//     console.log(x)
//   });

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'intro-in-RxJS';

	users: IUser[] | undefined;
	errorLoadingUsers = false;

	constructor(public userService: UserService) { }

	ngOnInit(): void {
		this.loadUsers();
	}

	loadUsers(search?: string): void {
		this.users = undefined;
		this.errorLoadingUsers = false;
		this.userService.loadUsers(search).pipe(
			// catchError(() => of([]))
		).subscribe({
			next: (users) => this.users = users, //Next fn
			error: (error) => {
        console.error(error);
        this.errorLoadingUsers = true;
      }, //Error fn
			complete: () => console.log('Load user stream completed')// Completed fn
		});
	}

	reloadButtonHandler() {
		this.loadUsers();
	}

	searchButtonHandler(searchInput: HTMLInputElement) {
		const { value } = searchInput;

		this.loadUsers(value);
	}
}

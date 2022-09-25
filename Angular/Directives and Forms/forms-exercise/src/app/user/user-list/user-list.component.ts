import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: IUser[] | undefined;
  errorLoadingUsers = false;


  constructor(public userService: UserService) {}

  ngOnInit(): void {
      this.loadUsers();
  }

  loadUsers(search?: string):void {
    this.users = undefined;
    this.userService.loadUsers(search).subscribe((users) => this.users = users);
  }

  reloadButtonHandler(searchInput: HTMLInputElement) {
    this.loadUsers();
    searchInput.value = '';
  }

  searchButtonHandler(searchInput: HTMLInputElement) {
    const { value } = searchInput;
    this.loadUsers(value);
  }

}

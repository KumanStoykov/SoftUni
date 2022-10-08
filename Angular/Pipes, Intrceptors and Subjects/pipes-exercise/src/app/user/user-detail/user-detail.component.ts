import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from '../user.service';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
    user$ = this.userService.user$;

    constructor(
        activatedRoute: ActivatedRoute,
        private userService: UserService
    ) {
        activatedRoute.params.subscribe(({ id }) => this.userService.loadUser(id));

     }
}

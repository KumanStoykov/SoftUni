import { Component } from '@angular/core';
import { faUser, faPhone, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

    icons = {
        faUser,
        faPhone,
        faEnvelope,
        faLock
    }

    constructor(private userService: UserService) { }


    register(): void {

    }


}

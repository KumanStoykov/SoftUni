import { Component, OnInit } from '@angular/core';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../user/user.service';

@Component({
    selector: 'app-welcome-section',
    templateUrl: './welcome-section.component.html',
    styleUrls: ['./welcome-section.component.scss']
})
export class WelcomeSectionComponent implements OnInit {

    icons = {
        faSignInAlt,
        faUserPlus
    }

    get isLogged(): boolean {
        return this.userService.isLogged;
     }
    constructor(private userService: UserService) { }

    ngOnInit(): void {
    }

}

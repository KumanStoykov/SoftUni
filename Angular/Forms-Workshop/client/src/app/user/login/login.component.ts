import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    icons = {
        faEnvelope,
        faLock
    }

    constructor(
        private userService: UserService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }


    login(email: string, password: string): void {
        this.userService.login(email, password);
        const redirectUrl = this.activatedRoute.snapshot.queryParams['redirectUrl'] || '/';
        this.router.navigate([redirectUrl]);
    }

}

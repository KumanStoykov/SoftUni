import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { emailValidator } from 'src/app/shared/validators';
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

    emailValidator = emailValidator;

    constructor(
        private userService: UserService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }


    login(form: NgForm): void {
        if (form.invalid) { return; }
        const { email, password } = form.value;
        this.userService.login({ email, password }).subscribe({
            next: () => {
                const redirectUrl = this.activatedRoute.snapshot.queryParams['redirectUrl'] || '/';
                this.router.navigate([redirectUrl]);
            },
            error: (err) => {
                console.log(err.error.message);
            }
        });
    }

}

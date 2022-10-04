import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faUser, faPhone, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { sameValueAsFactory, emailValidator } from 'src/app/shared/validators';
import { UserService } from '../user.service';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnDestroy {

    icons = {
        faUser,
        faPhone,
        faEnvelope,
        faLock
    }

    killSubscription = new Subject();

    form: FormGroup;

    constructor(
        private userService: UserService,
        private fb: FormBuilder,
        private router: Router
    ) {
        this.form = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(6)]],
            email: ['', [Validators.required, emailValidator]],
            tel: [''],
            //Second variant with group, then need to select in html group element
            // group: this.fb.group({
            //     password: ['', [Validators.required, Validators.minLength(4)]],
            //     rePassword: ['', [Validators.required, sameValueAsFactory(
            //         () => this.form?.get('password'), this.killSubscription
            //     )]]

            // }),
            password: ['', [Validators.required, Validators.minLength(4)]],
            rePassword: ['', [Validators.required, sameValueAsFactory(
                () => this.form?.get('password'), this.killSubscription
            )]]
        });
    }


    register(): void {
        if (!this.form.valid) { return; }
        this.userService.register(this.form.value).subscribe({
            next: () => {
                this.router.navigate(['/']);
            },
            error: (err) => {
                console.log(err);
            }
        })
    }

    ngOnDestroy(): void {
        this.killSubscription.next('');
        this.killSubscription.complete();
    }
}

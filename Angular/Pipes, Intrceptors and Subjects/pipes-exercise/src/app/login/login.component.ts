import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {


    constructor() { }

    loginHandler(form: NgForm): void {
        if (form.invalid) { return; }
        console.log(form)
    }

}

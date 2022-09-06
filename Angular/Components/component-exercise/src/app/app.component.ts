import { Component } from '@angular/core';
import { IUser } from './interfaces/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    // classes = ['test', 'test-1'];

    // showText = true;

    // constructor() {

    // }

    // ngOnInit(): void {}

    // ngAfterViewInit(): void {}

    // changeTitleHandler(inputElement: HTMLInputElement): void {
    //     this.title = inputElement.value;
    //     inputElement.value = '';
    // }

    // toggleText(event: MouseEvent): void{
    //     this.classes.push('test-' + this.title++)
    //     event.preventDefault();
    //     this.showText = !this.showText;
    // }

    title = '';

    users = [
        {
            name: 'Ivan 1',
            age: 21
        },
        {
            name: 'Ivan 2',
            age: 22
        },
        {
            name: 'Ivan 3',
            age: 23
        },
    ]

    addNewUserHandler(newUser: IUser): void {
        if (newUser.name !== '' && newUser.age > 0) {
            this.users.push(newUser);
        }
    }

    //   buttonClickHandler(): void {
    //     const current = this.title++;
    //     this.users.push({
    //         name: `Ivan ${current}`,
    //         age: current
    //     })
    //   }
}

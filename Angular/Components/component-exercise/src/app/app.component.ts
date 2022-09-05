import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    classes = ['test', 'test-1'];

    showText = true;

    changeTitleHandler(inputElement: HTMLInputElement): void {
        this.title = inputElement.value;
        inputElement.value = '';
    }

    // toggleText(event: MouseEvent): void{
    //     this.classes.push('test-' + this.title++)
    //     event.preventDefault();
    //     this.showText = !this.showText;
    // }
    title = '';

    //   users = [
    //     {
    //         name: 'Ivan 1',
    //         age: 21
    //     },
    //     {
    //         name: 'Ivan 2',
    //         age: 22
    //     },
    //     {
    //         name: 'Ivan 3',
    //         age: 23
    //     },
    //   ]

    //   buttonClickHandler(): void {
    //     const current = this.title++;
    //     this.users.push({
    //         name: `Ivan ${current}`,
    //         age: current
    //     })
    //   }
}

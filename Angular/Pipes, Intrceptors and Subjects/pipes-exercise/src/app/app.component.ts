import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isActive = false;

    data = [{ test: 133 }, { test: 2 }, { test: 3 }];

    addItem() {
        this.data.push({ test: 4 });
    }

    toggleActive() {
        this.isActive = !this.isActive;
    }
}

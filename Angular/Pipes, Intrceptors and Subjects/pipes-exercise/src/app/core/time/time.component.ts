import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    selector: 'app-time',
    templateUrl: './time.component.html',
    styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnDestroy {
    timeStreamSubscription!: Subscription;

    time$ = interval(1000).pipe(
        startWith(''),
        map(() => this.timeFormatter())
    );

    timeValue!: string;

    constructor() {
        this.timeStreamSubscription = this.time$.subscribe(timeValue => this.timeValue = timeValue);
    }

    timeFormatter() {
        let hour = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours();
        let minutes = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
        let secund = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
        let time = `${hour}:${minutes}:${secund}`;
        return time;
    }

    ngOnDestroy(): void {
        this.timeStreamSubscription.unsubscribe();
    }
}

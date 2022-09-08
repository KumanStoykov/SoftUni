import { Component } from '@angular/core';
import { UserService } from './user.service';

import { of } from 'rxjs';
import { map } from 'rxjs/operators';

of(1000, 100, 200)
  .pipe(map(x => x + 100))
  .subscribe((x) => {
    console.log(x)
  });


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'intro-in-RxJS';

  constructor(public userService: UserService) { }
}

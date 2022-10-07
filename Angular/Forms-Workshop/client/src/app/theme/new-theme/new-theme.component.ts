import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ForumService } from 'src/app/forum.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.scss']
})
export class NewThemeComponent  {

  constructor(
    private forumService: ForumService,
    private router: Router
  ) { }

  createTheme(form: NgForm): void {
    if(form.invalid) { return; }

    this.forumService.saveTheme(form.value).subscribe({
        next: () => {
            this.router.navigate(['/themes']);
        },
        error(err) {
            console.log(err);
        },
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ForumService } from './forum.service';
import { ITheme } from './interfaces/theme';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    themes: ITheme[] | undefined;

    constructor(public forumService: ForumService) { }

    ngOnInit(): void {
        this.themes = undefined;

        this.forumService.loadThemes().subscribe({
            next: (themes) => this.themes = themes,
            error: (error) => console.error(error),
            complete: () => console.log('All themes complete load!!')
        });
    }

}

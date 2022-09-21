import { Component, OnInit } from '@angular/core';
import { ForumService } from './forum.service';
import { ITheme, IPost } from './shared/interfaces';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    themes: ITheme[] | undefined;
    latest: IPost[] | undefined;

    constructor(public forumService: ForumService) { }

    ngOnInit(): void {
        this.themes = undefined;
        this.latest = undefined;

        this.forumService.loadThemes().subscribe({
            next: (themes) => this.themes = themes,
            error: (error) => console.error(error),
            complete: () => console.log('All themes complete load!!')
        });

        this.forumService.loadLatestTheme(5).subscribe({
            next: (latest) => this.latest = latest,
            error: (error) => console.error(error),
            complete: () => console.log('All themes complete load!!')
        });
    }

}

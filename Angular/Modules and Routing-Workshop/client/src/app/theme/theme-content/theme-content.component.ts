import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from 'src/app/forum.service';
import { ITheme } from 'src/app/shared/interfaces';

@Component({
    selector: 'app-theme-content',
    templateUrl: './theme-content.component.html',
    styleUrls: ['./theme-content.component.scss']
})
export class ThemeContentComponent {
    theme: ITheme | undefined;

    constructor(
        private forumService: ForumService,
        private activateRoute: ActivatedRoute
    ) {
        this.fetchTheme();
    }

    fetchTheme(): void {
        this.theme = undefined;
        const id = this.activateRoute.snapshot.params['id']
        this.forumService.loadTheme(id).subscribe(theme => this.theme = theme);
    }

}

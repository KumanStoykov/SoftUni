import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from 'src/app/forum.service';
import { ITheme } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/user/user.service';

@Component({
    selector: 'app-theme-content',
    templateUrl: './theme-content.component.html',
    styleUrls: ['./theme-content.component.scss']
})
export class ThemeContentComponent {
    theme: ITheme | undefined;

    get isLogged(): boolean {
        return this.userService.isLogged;
    }

    constructor(
        private forumService: ForumService,
        private activateRoute: ActivatedRoute,
        private userService: UserService
    ) {
        this.fetchTheme();
    }

    fetchTheme(): void {
        this.theme = undefined;
        const id = this.activateRoute.snapshot.params['themeId'];
        this.forumService.loadTheme(id).subscribe(theme => this.theme = theme);
    }

}

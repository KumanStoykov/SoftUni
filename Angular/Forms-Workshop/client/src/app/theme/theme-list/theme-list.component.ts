import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/forum.service';
import { ITheme } from '../../shared/interfaces';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit {
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

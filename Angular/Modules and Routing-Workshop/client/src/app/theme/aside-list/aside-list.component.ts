import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/forum.service';
import { IPost } from '../../shared/interfaces';

@Component({
  selector: 'app-aside-list',
  templateUrl: './aside-list.component.html',
  styleUrls: ['./aside-list.component.scss']
})
export class AsideListComponent implements OnInit {

    latestThemeArr: IPost[] | undefined;

  constructor(public forumService: ForumService) { }


  ngOnInit(): void {
    this.latestThemeArr = undefined;

    this.forumService.loadLatestTheme(5).subscribe({
        next: (themes) => this.latestThemeArr = themes,
        error: (error) => console.error(error),
        complete: () => console.log('All themes complete load!!')
    });

   }

}

import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../shared/interfaces';

@Component({
  selector: 'app-aside-list',
  templateUrl: './aside-list.component.html',
  styleUrls: ['./aside-list.component.scss']
})
export class AsideListComponent implements OnInit {

  constructor() { }

  @Input() latestThemeArr: IPost[] = [];

  ngOnInit(): void { }

}

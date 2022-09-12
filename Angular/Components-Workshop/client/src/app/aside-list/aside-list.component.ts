import { Component, OnInit, Input } from '@angular/core';
import { ITheme } from '../interfaces/theme';

@Component({
  selector: 'app-aside-list',
  templateUrl: './aside-list.component.html',
  styleUrls: ['./aside-list.component.scss']
})
export class AsideListComponent implements OnInit {

  constructor() { }

  @Input() latestThemeArr: ITheme[] = [];

  ngOnInit(): void { }

}

import { Component, Input, OnInit } from '@angular/core';
import { ITheme } from '../shared/interfaces';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit {

  constructor() { }

  @Input() themesArr: ITheme[] = [];

  ngOnInit(): void { }


}

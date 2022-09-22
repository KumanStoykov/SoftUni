import { Component, Input, OnInit } from '@angular/core';
import { ITheme } from '../../shared/interfaces';

@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrls: ['./card-main.component.scss']
})
export class CardMainComponent implements OnInit {

    @Input() theme!: ITheme;

  constructor() { }

  ngOnInit(): void {
  }

}

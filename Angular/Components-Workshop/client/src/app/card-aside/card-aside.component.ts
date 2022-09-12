import { Component, OnInit, Input } from '@angular/core';
import { ITheme } from '../interfaces/theme';

@Component({
  selector: 'app-card-aside',
  templateUrl: './card-aside.component.html',
  styleUrls: ['./card-aside.component.scss']
})
export class CardAsideComponent implements OnInit {

    @Input() theme!: ITheme;

  constructor() { }

  ngOnInit(): void {
  }

}

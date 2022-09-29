import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { ITheme } from '../../shared/interfaces';

@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrls: ['./card-main.component.scss']
})
export class CardMainComponent implements OnInit {

    @Input() theme!: ITheme;

    get isLogged(): Boolean{
        return this.userService.isLogged;
    }

  constructor( private userService: UserService) { }

  ngOnInit(): void {
  }

}

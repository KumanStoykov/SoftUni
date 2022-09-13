import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../shared/interfaces';

@Component({
  selector: 'app-card-aside',
  templateUrl: './card-aside.component.html',
  styleUrls: ['./card-aside.component.scss']
})
export class CardAsideComponent implements OnInit {

    @Input() post!: IPost;

  constructor() { }

  ngOnInit(): void {
  }

}

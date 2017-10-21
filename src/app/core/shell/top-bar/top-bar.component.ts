import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mtg-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Input() userInfo;

  constructor() { }

  ngOnInit() {
    console.log('navbar' , this.userInfo);
  }

}

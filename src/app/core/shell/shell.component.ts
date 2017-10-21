import { Component, DoCheck, OnInit } from '@angular/core';
import { LocalStorage } from './../../utils/local-storage/LocalStorage';

@Component({
  selector: 'mtg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  providers: [ LocalStorage ]
})
export class ShellComponent implements OnInit, DoCheck {

  public userInfo;

  constructor(private storage: LocalStorage) { }

  ngOnInit() {
    this.userInfo = this.storage.getUserStorage();
  }

  ngDoCheck() {
    this.userInfo = this.storage.getUserStorage();
  }

}

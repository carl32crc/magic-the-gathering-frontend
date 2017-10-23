import { Http } from '@angular/http';
import { Router } from '@angular/router';
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

  constructor(private storage: LocalStorage, private rt: Router) {}

  ngOnInit() {
    this.userInfo = this.storage.getUserStorage();
  }

  ngDoCheck() {
    this.userInfo = this.storage.getUserStorage();
  }

  private logout = () => {
    localStorage.clear();
    this.userInfo = null;
    this.rt.navigate(['/']);
  }

}

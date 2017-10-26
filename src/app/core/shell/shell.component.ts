import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Component, DoCheck, OnInit, ChangeDetectorRef } from '@angular/core';
import { LocalStorage } from './../../utils/local-storage/LocalStorage';
import { server } from './../../constants/server.constants';

@Component({
  selector: 'mtg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  providers: [ LocalStorage ]
})
export class ShellComponent implements OnInit, DoCheck {

  public userInfo;
  private profileImage: string;
  private url: string;

  constructor(private storage: LocalStorage, private rt: Router, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.url = server.url;
    this.userInfo = this.storage.getUserStorage();
    this.getAvatar();
  }

  ngDoCheck() {
    this.userInfo = this.storage.getUserStorage();
    this.getAvatar();
  }

  getAvatar() {
    if ( this.userInfo ) {
      this.profileImage = this.userInfo.image ? `${this.url}image-user/${this.userInfo.image}` : 'assets/img/darth-vader.png';
      this.ref.detectChanges();
    }
  }

  private logout = () => {
    localStorage.clear();
    this.userInfo = null;
    this.rt.navigate(['/']);
  }

}

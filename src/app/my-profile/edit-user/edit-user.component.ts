import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.interface';
import { LocalStorage } from './../../utils/local-storage/LocalStorage';

@Component({
  selector: 'mtg-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
  providers: [ LocalStorage ]
})
export class EditUserComponent implements OnInit {
  public title: string;
  public user: User;
  public identify;
  public token;


  constructor(private storage: LocalStorage) { }

  ngOnInit() {
    this.title = 'Editar mis datos';
    this.identify = this.storage.getUserStorage();
    this.token = this.storage.getTokenStorage();
    this.user = this.identify;
  }

}

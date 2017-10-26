import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { server } from './../../constants/server.constants';
import { LocalStorage } from './../../utils/local-storage/LocalStorage';

@Injectable()
export class UpdateService {
  private url: string;

  constructor(private storage: LocalStorage, private http: Http) {
    this.url = server.url;
  }

  updateUser(user, id) {
    const params = JSON.stringify(user);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.storage.getTokenStorage()
    });

    return this.http.put(`${this.url}update-user/${id}`, params, {headers: headers})
            .map(res => res.json());
  }

}

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { server } from './../../constants/server.constants';

@Injectable()
export class LogInService {
  private url: string;

  constructor(private http: Http) {
    this.url = server.url;
  }

  logIn(user, token = null) {

    if (token !== null) {
      user.token = token;
    }

    const params = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.post( `${this.url}login`, params, { headers: headers })
               .map(res => res.json());
  }

}

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { server } from './../../constants/server.constants';

@Injectable()
export class RegisterService {
  private url: string;

  constructor(private http: Http) {
    this.url = server.url;
  }

  register(user) {
    const params = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.post( `${this.url}register`, params, { headers: headers })
               .map(res => res.json());
  }

}

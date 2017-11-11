import { Http, Headers, Request, Response, RequestOptions } from '@angular/http';
import { CollectionChangeRecord, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { server } from './../../constants/server.constants';
import { LocalStorage } from './../../utils/local-storage';

@Injectable()
export class SliderService {
  private url: string;
  headers: Headers = new Headers();

  constructor(private http: Http) {
    this.url = server.url;
  }

  uploadSlider(url: string, params: any, token: string, name: string) {
    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();

      for (let i = 0; i < params.image.length; i++) {
        formData.append(name, params.image[i], params.image[i].name);
      }

      formData.append('title', params.title);
      formData.append('subtitle', params.subtitle);
      formData.append('date', params.date);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.open( 'POST', url, true );
      xhr.setRequestHeader('Authorization', token);
      xhr.send(formData);

    });
  }

  getSlider(token) {

    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization' : token });

    return this.http.get( `${this.url}slider`, { headers: headers })
                .map(res => res.json());
  }

  makeRequest (url: string, body, headers: Headers = new Headers()) {

    const formData: any = new FormData();
    formData.append('image', body[0], body[0].name);

    const options = new RequestOptions({ headers: headers });
    return this.http.post(url, formData, options)
                    .map(res => res.json());
  }

}

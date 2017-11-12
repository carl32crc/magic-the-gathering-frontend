import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { server } from './../../constants/server.constants';

@Injectable()
export class SliderService {
  private url: string;

  constructor(private http: Http) {
    this.url = server.url;
  }

  uploadSlider (url: string, params, headers: Headers = new Headers()) {

    const formData: any = new FormData();
    formData.append('image', params.image[0], params.image[0].name);
    formData.append('title', params.title);
    formData.append('subtitle', params.subtitle);
    formData.append('date', params.date);

    const options = new RequestOptions({ headers: headers });
    return this.http.post(url, formData, options)
                    .map(res => res.json());
  }

  getSlider(token) {

    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization' : token });

    return this.http.get( `${this.url}slider`, { headers: headers })
                .map(res => res.json());
  }

  updateSlider(slider, id, token) {
    const params = JSON.stringify(slider);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': token
    });

    return this.http.put(`${this.url}update-slider/${id}`, params, {headers: headers})
            .map(res => res.json());
  }

  uploadImage (url: string, image, headers: Headers = new Headers()) {

    const formData: any = new FormData();
    formData.append('image', image[0], image[0].name);

    const options = new RequestOptions({ headers: headers });
    return this.http.post(url, formData, options)
                    .map(res => res.json());
  }

}

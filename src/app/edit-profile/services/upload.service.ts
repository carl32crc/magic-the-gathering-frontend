import { Headers, Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { server } from './../../constants/server.constants';
import { LocalStorage } from './../../utils/local-storage';

@Injectable()
export class UploadService {

  constructor(private http: Http) {}

  uploadImage (url: string, image, headers: Headers = new Headers()) {

    const formData: any = new FormData();
    formData.append('image', image[0], image[0].name);

    const options = new RequestOptions({ headers: headers });
    return this.http.post(url, formData, options)
                    .map(res => res.json());
  }

}

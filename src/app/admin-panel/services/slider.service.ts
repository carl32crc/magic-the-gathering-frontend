import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { server } from './../../constants/server.constants';
import { LocalStorage } from './../../utils/local-storage/LocalStorage';

@Injectable()
export class SliderService {

  constructor() { }

  uploadSlider(url: string, params: any, token: string, name: string) {
    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();

      // files.map((d) => {
      //   console.log(d);
      // });

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

}

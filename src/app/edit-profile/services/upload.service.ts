import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { server } from './../../constants/server.constants';
import { LocalStorage } from './../../utils/local-storage/LocalStorage';

@Injectable()
export class UploadService {

  constructor() {}

  uploadImage(url: string, params: Array<string>, files: Array<File>, token: string, name: string) {
    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();

      // files.map((d) => {
      //   console.log(d);
      // });

      for (let i = 0; i < files.length; i++) {
        formData.append(name, files[i], files[i].name);
      }

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

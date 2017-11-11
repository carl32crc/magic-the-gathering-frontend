import { Component, OnInit } from '@angular/core';
import { Headers } from '@angular/http';
import { Slider } from '../../models/slider.interface';
import { LocalStorage } from './../../../utils/local-storage';
import { SliderService } from '../../services/slider.service';
import { server } from './../../../constants/server.constants';


@Component({
  selector: 'mtg-list-slider',
  templateUrl: './list-slider.component.html',
  styleUrls: ['./list-slider.component.scss'],
  providers: [ LocalStorage, SliderService ]
})
export class ListSliderComponent implements OnInit {

  private message: string;
  private token: string;
  private slider: Array<Slider>;
  private url: string;

  constructor(private storage: LocalStorage, private sld: SliderService) { }

  ngOnInit() {
    this.url = server.url + 'image-slider/';
    this.token = this.storage.getTokenStorage();
    this.getSlider();
  }

  getSlider() {
    this.sld.getSlider(this.token).subscribe(
      response => {
        if (response.slide) {
          this.slider = response.slide;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  uploadImage(imageFile, id) {
    const headers = new Headers();
    headers.delete('Content-Type');
    headers.set('Authorization', this.token);

    this.sld.makeRequest(`${server.url}upload-slider-image/${id}`, imageFile , headers).subscribe(
      response => { console.log(response); },
      error => { console.log(error); }
    );
  }

}

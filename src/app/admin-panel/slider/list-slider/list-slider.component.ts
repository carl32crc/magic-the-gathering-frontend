import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Headers } from '@angular/http';
import { Slider } from '../../models/slider.interface';
import { LocalStorage } from './../../../utils/local-storage';
import { SliderService } from '../../services/slider.service';
import { server } from './../../../constants/server.constants';
import { FormComponent } from '../form/form.component';


@Component({
  selector: 'mtg-list-slider',
  templateUrl: './list-slider.component.html',
  styleUrls: ['./list-slider.component.scss'],
  providers: [ LocalStorage, SliderService ]
})
export class ListSliderComponent implements OnInit {

  @ViewChild(FormComponent) formComponent: FormComponent;
  private message: string;
  private token: string;
  private slider: Array<Slider>;
  private url: string;

  constructor(private storage: LocalStorage, private sld: SliderService) { }

  ngOnInit() {
    this.url = server.url;
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

    if (imageFile[0].type === 'image/png' || imageFile[0].type === 'image/jpeg') {
      this.sld.uploadImage(`${this.url}upload-slider-image/${id}`, imageFile , headers).subscribe(
        response => {
          this.formComponent.imageDb = response.image;
          this.formComponent.message = 'La imagen se ha cambiado';
        },
        error => { console.log(error); }
      );
    } else {
      this.formComponent.message = 'Debes de añadir una imagen .jpg o .png';
    }
  }

}

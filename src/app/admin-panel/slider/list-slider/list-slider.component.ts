import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
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

  private isModalVisible: boolean;
  private success = false;
  private message: string;
  private token: string;
  private slider: Array<any>;
  private url: string;

  constructor(private storage: LocalStorage, private sld: SliderService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.isModalVisible = false;
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

  updatedTitle(title, id) {
    this.slider.map((slide) => {
      // tslint:disable-next-line:no-unused-expression
      slide._id === id ? slide.title = title : slide.title;
    });
  }

  updatedImage(image, id) {
    this.slider.map((slide) => {
      if (slide._id === id) {
        slide.image = image;
      }
    });
  }

  updateSlider(event, id) {
    this.sld.updateSlider(event.value, id, this.token).subscribe(
      response => {
        if (response.dataUpdated) {
          this.updatedTitle(response.dataUpdated.title, id);
          event.formComponent.message = 'Se ha actualizado correctamente';
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  uploadImage(formComponent, id) {
    const imageFile = formComponent.image;
    const headers = new Headers();
    headers.delete('Content-Type');
    headers.set('Authorization', this.token);

    if (imageFile[0].type === 'image/png' || imageFile[0].type === 'image/jpeg') {
      this.sld.uploadImage(`${this.url}upload-slider-image/${id}`, imageFile , headers).subscribe(
        response => {
          this.updatedImage(response.image, id);
          formComponent.message = 'La imagen se ha cambiado';
        },
        error => { console.log(error); }
      );
    } else {
      formComponent.message = 'Debes de añadir una imagen .jpg o .png';
    }
  }


  deleteSlider(id) {
    this.sld.deleteSlider(id, this.token).subscribe(
      response => {
        if (response.slide) {
          this.getSlider();
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}

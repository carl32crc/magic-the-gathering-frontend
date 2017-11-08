import { SliderService } from './../services/slider.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormTools } from './../../shared/form-tools.service';
import { Slider } from './../models/slider.interface';
import { server } from './../../constants/server.constants';
import { ListSliderComponent } from './list-slider/list-slider.component';
import { FormComponent } from './form/form.component';
import { LocalStorage } from './../../utils/local-storage';

@Component({
  selector: 'mtg-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [ LocalStorage, SliderService ]
})
export class SliderComponent implements OnInit {

  @ViewChild(ListSliderComponent) call: ListSliderComponent;
  @ViewChild(FormComponent) message: FormComponent;
  private token: string;
  private url: string;

  constructor(private sld: SliderService, private storage: LocalStorage) { }

  ngOnInit() {
    this.url = server.url;
    this.token = this.storage.getTokenStorage();
  }

  addSlide(value) {
    this.sld.uploadSlider(`${this.url}save-slider`, value, this.token, 'image').then((res: any) => {
      if (res.slider) {
        this.message.message = res.message;
        this.call.getSlider();
      } else {
        this.message.message = res.message;
      }
    }).catch((err) => {
      console.log(err);
    });
  }

}

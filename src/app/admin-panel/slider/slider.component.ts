import { SliderService } from './../services/slider.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Headers } from '@angular/http';
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
    const headers = new Headers();
    headers.delete('Content-Type');
    headers.set('Authorization', this.token);

    this.sld.uploadSlider(`${this.url}save-slider`, value, headers).subscribe(
      response => {
        this.message.message = response.message;
        this.call.getSlider();
      },
      error => { console.log(error); }
    );
  }
}

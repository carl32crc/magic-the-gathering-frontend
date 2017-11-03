import { Component, OnInit } from '@angular/core';
import { Slider } from '../../models/slider.interface';
import { LocalStorage } from './../../../utils/local-storage/LocalStorage';
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

  constructor(private storage: LocalStorage, private sld: SliderService) { }

  ngOnInit() {
    this.token = this.storage.getTokenStorage();
    this.getSlider();
  }

  getSlider() {
    this.sld.getSlider(this.token).subscribe(
      response => {
        if (response.slide) {
          this.slider = response.slide;
        }
        console.log(this.slider);
      },
      error => {
        console.log(error);
      }
    );
  }

}

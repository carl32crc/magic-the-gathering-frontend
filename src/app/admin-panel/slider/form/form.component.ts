import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormTools } from '../../../shared/form-tools.service';
import { Slider } from '../../models/slider.interface';
import { LocalStorage } from './../../../utils/local-storage/LocalStorage';
import { SliderService } from '../../services/slider.service';
import { server } from './../../../constants/server.constants';

@Component({
  selector: 'mtg-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [ LocalStorage, SliderService ]
})
export class FormComponent implements OnInit {

  private slider: FormGroup;
  private formTools: FormTools;
  private message: string;
  private image: Array<File>;
  private token: string;
  private url: string;

  constructor(private fb: FormBuilder, private storage: LocalStorage, private sld: SliderService) { }

  ngOnInit() {
    this.url = server.url;
    this.buildForm();
    this.token = this.storage.getTokenStorage();
  }

  buildForm() {
    this.slider = this.fb.group({
      title: ['' , [Validators.required]],
      subtitle: ['' , [Validators.required]]
    });

    this.formTools = new FormTools(this.slider);
  }

  changeImage(file: any) {
    this.image = <Array<File>>file.target.files;
  }

  add({ value, valid }: { value: Slider, valid: boolean }) {
    if (this.image && (this.image[0].type === 'image/png' || this.image[0].type === 'image/jpeg')) {
      value.image = this.image;

      this.sld.uploadSlider(`${this.url}save-slider`, value, this.token, 'image').then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });

    } else {
      this.message = 'Debes de añadir una imagen .jpg o .png';
    }
  }

}

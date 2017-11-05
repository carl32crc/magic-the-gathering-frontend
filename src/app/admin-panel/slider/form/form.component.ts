import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormTools } from '../../../shared/form-tools.service';
import { Slider } from '../../models/slider.interface';
import { LocalStorage } from './../../../utils/local-storage';
import { IsoDateToDate, eventDate } from '../../../utils/date';
import { SliderService } from '../../services/slider.service';
import { server } from './../../../constants/server.constants';

@Component({
  selector: 'mtg-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [ LocalStorage, SliderService ]
})
export class FormComponent implements OnInit {

  @Input() title;
  @Input() subtitle;
  @Input() date;
  @Input() imageDb;
  @Output() getSlider = new EventEmitter();
  private slider: FormGroup;
  private formTools: FormTools;
  private message: string;
  private image: Array<File>;
  private token: string;
  private url: string;
  private toDay: string;

  constructor(private fb: FormBuilder, private ref: ChangeDetectorRef, private storage: LocalStorage, private sld: SliderService) { }

  ngOnInit() {
    this.url = server.url;
    this.buildForm();
    this.token = this.storage.getTokenStorage();
    this.ref.detectChanges();
  }

  buildForm() {
    this.slider = this.fb.group({
      title: [this.title ? this.title : '' , [Validators.required]],
      subtitle: [ this.subtitle ? this.subtitle : ''  , [Validators.required]],
      date: [this.date ? IsoDateToDate(this.date) : null, []]
    });

    this.formTools = new FormTools(this.slider);
  }

  changeImage(file: any) {
    this.image = <Array<File>>file.target.files;
  }

  add({ value, valid }: { value: Slider, valid: boolean }) {

    if (this.image && (this.image[0].type === 'image/png' || this.image[0].type === 'image/jpeg')) {
      value.date = eventDate(value.date);
      value.image = this.image;

      this.sld.uploadSlider(`${this.url}save-slider`, value, this.token, 'image').then((res: any) => {
        if (res.slider) {
          this.message = res.message;
          this.getSlider.emit(null);
        } else {
          this.message = res.message;
        }
      }).catch((err) => {
        console.log(err);
      });

    } else {
      this.message = 'Debes de añadir una imagen .jpg o .png';
    }
  }
}

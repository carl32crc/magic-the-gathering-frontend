import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormTools } from '../../../shared/form-tools.service';
import { Slider } from '../../models/slider.interface';
import { IsoDateToDate, eventDate } from '../../../utils/date';
import { server } from './../../../constants/server.constants';

@Component({
  selector: 'mtg-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [ ]
})
export class FormComponent implements OnInit {

  @Input() title;
  @Input() subtitle;
  @Input() date;
  @Input() imageDb;
  @Input() update;
  @Output() action = new EventEmitter<Slider>();
  @Output() imageUpdate = new EventEmitter<any>();
  private slider: FormGroup;
  private formTools: FormTools;
  public message: string;
  private image: Array<File>;
  private url: string;

  constructor(private fb: FormBuilder, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.url = server.url;
    this.buildForm();
    this.ref.detectChanges();
  }

  buildForm() {
    this.slider = this.fb.group({
      title: [this.title ? this.title : '' , [Validators.required]],
      subtitle: [ this.subtitle ? this.subtitle : ''  , [Validators.required]],
      date: [this.date ? IsoDateToDate(this.date) : '', []]
    });

    this.formTools = new FormTools(this.slider);
  }

  changeImage(file: any) {
    this.image = <Array<File>>file.target.files;
    if (this.update) {
      this.imageUpdate.emit(this.image);
    }
  }

  submit({ value, valid }: { value: Slider, valid: boolean }) {

    if ((this.image && (this.image[0].type === 'image/png' || this.image[0].type === 'image/jpeg')) || this.update ) {
      if (this.update) {
        // this.action.emit(this.image);
      } else {
        value.date = eventDate(value.date);
        value.image = this.image;
        this.action.emit(value);
      }
    } else {
      this.message = 'Debes de añadir una imagen .jpg o .png';
    }
  }
}

import { FormTools } from '../../shared/form-tools.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { passwordMatcher } from './validation/password_matcher';
import { User } from '../models/user.interface';

@Component({
  selector: 'mtg-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  private title: string;
  private user: FormGroup;
  private message: string;
  private formTools: FormTools;
  // tslint:disable-next-line:max-line-length
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.user = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      checkPassword: ['', [Validators.required]]
    }, { validator: passwordMatcher } );

    this.formTools = new FormTools(this.user);
  }

  saveData({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }

}

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { passwordMatcher } from './validation/password_matcher';
import { User } from '../models/user.interface';

@Component({
  selector: 'mtg-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  private title: string;
  private user: FormGroup;
  private message: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.user = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      checkPassword: ['', [Validators.required]]
    }, { validator: passwordMatcher } );
  }

  saveData({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }

}

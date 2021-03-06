import { FormTools } from '../../shared/form-tools.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { passwordMatcher } from './validation/password_matcher';
import { User } from '../models/user.interface';
import { server } from './../../constants/server.constants';
import { patterns } from './../../constants/patterns.constants';
import { RegisterService } from './../services/register.service';

@Component({
  selector: 'mtg-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [ RegisterService ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  private title: string;
  private user: FormGroup;
  private message: string;
  private formTools: FormTools;

  constructor(private fb: FormBuilder, private rs: RegisterService, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.user = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(patterns.email)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      checkPassword: ['', [Validators.required]]
    }, { validator: passwordMatcher } );

    this.formTools = new FormTools(this.user);
  }

  saveData({ value, valid }: { value: User, valid: boolean }) {

    if (valid) {
      this.rs.register(value).subscribe(
        response => {
          if (response.message) {
            this.message = response.message;

            if (response.user) {
                this.user.reset();
            }

            this.ref.detectChanges();
          }
        },
        error => {
         console.log(error);
        }
      );
    }
  }

}

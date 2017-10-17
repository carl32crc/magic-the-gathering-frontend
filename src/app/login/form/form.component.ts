import { FormTools } from '../../shared/form-tools.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { User } from '../models/user.interface';
import { server } from './../../constants/server.constants';
import { patterns } from './../../constants/patterns.constants';
import { LogInService } from './../services/log-in.service';

@Component({
  selector: 'mtg-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [ LogInService ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  private title: string;
  private user: FormGroup;
  private message: string;
  private formTools: FormTools;
  private identify;
  private token;

  constructor(private fb: FormBuilder, private ls: LogInService, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.user = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(patterns.email)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });

    this.formTools = new FormTools(this.user);
  }

  logIn({ value, valid }: { value: User, valid: boolean }) {
    this.ls.logIn(value, 'true').subscribe(
      response => {
        console.log(response);
        // this.token = response.token;

        // if (this.token.length <= 0) {
        //   console.log('El token no se ha generado');
        // } else {
        //   console.log(this.token);
        // }
      },
      error => {
        console.log(error);
      }
    );
  }

}


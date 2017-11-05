import { FormTools } from '../../shared/form-tools.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { User } from '../models/user.interface';
import { server } from './../../constants/server.constants';
import { patterns } from './../../constants/patterns.constants';
import { LogInService } from './../services/log-in.service';
import { LocalStorage } from './../../utils/local-storage';

@Component({
  selector: 'mtg-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [ LogInService, LocalStorage ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  private title: string;
  private user: FormGroup;
  private message: string;
  private formTools: FormTools;
  private identify;
  private token;

  constructor(private fb: FormBuilder, private ls: LogInService,
              private ref: ChangeDetectorRef, private storage: LocalStorage, private router: Router) {}

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

        if (response.user && response.token) {
          this.storage.setItemStorage('user', response.user);
          this.storage.setItemStorage('token', response.token);

          this.router.navigate(['/']);
        }

      },
      error => {
        this.message = error.json().message;
        this.ref.detectChanges();
      }
    );
  }

}


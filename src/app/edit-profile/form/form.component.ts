import { FormTools } from '../../shared/form-tools.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { User } from '../../models/user.interface';
import { server } from './../../constants/server.constants';
import { patterns } from './../../constants/patterns.constants';
import { LocalStorage } from './../../utils/local-storage/LocalStorage';
import { UpdateService } from './../services/update.service';

@Component({
  selector: 'mtg-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [ LocalStorage, UpdateService ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  private title: string;
  private user: FormGroup;
  private message: string;
  private formTools: FormTools;
  private identify;
  private token;

  constructor(private fb: FormBuilder, private ref: ChangeDetectorRef,
              private storage: LocalStorage, private us: UpdateService) {}

  ngOnInit() {
    this.identify = this.storage.getUserStorage();
    this.token = this.storage.getTokenStorage();
    this.buildForm();
  }

  buildForm() {
    this.user = this.fb.group({
      name: [ this.identify.name , [Validators.required]],
      surname: [ this.identify.surname , [Validators.required]],
      email: [this.identify.email , [Validators.required, Validators.pattern(patterns.email)]],
    });

    this.formTools = new FormTools(this.user);
  }

  updateData({ value, valid }: { value: User, valid: boolean }) {

      this.us.updateUser(value, this.identify._id).subscribe(
        response => {
          if (!response.dataUpdated) {
            console.log('No se ha actualizado el usuario');
          } else {
            this.storage.setItemStorage('user', response.dataUpdated);
          }
        },
        error => {
          console.log(error);
        }
      );
  }

}

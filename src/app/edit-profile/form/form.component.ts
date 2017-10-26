import { FormTools } from '../../shared/form-tools.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, DoCheck } from '@angular/core';
import { User } from '../../models/user.interface';
import { server } from './../../constants/server.constants';
import { patterns } from './../../constants/patterns.constants';
import { LocalStorage } from './../../utils/local-storage/LocalStorage';
import { UpdateService } from './../services/update.service';
import { UploadService } from './../services/upload.service';

@Component({
  selector: 'mtg-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [ LocalStorage, UpdateService, UploadService ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit, DoCheck {

  private title: string;
  private user: FormGroup;
  private message: string;
  private formTools: FormTools;
  private profileImage: string;
  private files: Array<File>;
  private url: string;
  private identify;
  private token;

  constructor(private fb: FormBuilder, private ref: ChangeDetectorRef,
              private storage: LocalStorage, private us: UpdateService,
              private upls: UploadService) {}

  ngOnInit() {
    this.url = server.url;
    this.identify = this.storage.getUserStorage();
    this.token = this.storage.getTokenStorage();
    this.buildForm();
    this.getAvatar();
  }

  ngDoCheck() {
    this.getAvatar();
  }

  buildForm() {
    this.user = this.fb.group({
      name: [ this.identify.name , [Validators.required]],
      surname: [ this.identify.surname , [Validators.required]],
      email: [this.identify.email , [Validators.required, Validators.pattern(patterns.email)]]
    });

    this.formTools = new FormTools(this.user);
  }

  getAvatar() {
    this.profileImage = this.identify.image ? `${this.url}image-user/${this.identify.image}` : 'assets/img/darth-vader.png';
    this.ref.detectChanges();
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

  uploadFile(file: any) {
    this.files = <Array<File>>file.target.files;

    if (this.files[0].type === 'image/png' || this.files[0].type === 'image/jpeg') {
      this.upls.uploadImage(`${this.url}upload-user-image/${this.identify._id}`, [] ,
        this.files, this.token, 'image').then((response: any) => {
            this.identify.image = response.image;
            this.storage.setItemStorage('user', this.identify);
        });
    } else {
      this.message = 'La imagen tiene que tener la extensión .jpeg, .jpg o .png';
    }
  }
}

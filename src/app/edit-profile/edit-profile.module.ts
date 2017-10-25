import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile.component';
import { APP_ROUTING } from './edit-profile.routes';
import { SharedModule } from './../shared/shared.module';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    APP_ROUTING,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    EditProfileComponent,
    FormComponent
  ]
})
export class EditProfileModule { }

import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';
import { APP_ROUTING } from './my-profile.routes';
import { SharedModule } from './../shared/shared.module';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  imports: [
    CommonModule,
    APP_ROUTING,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    MyProfileComponent,
    EditUserComponent
  ]
})
export class MyProfileModule { }

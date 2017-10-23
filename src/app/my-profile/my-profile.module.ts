import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';
import { APP_ROUTING } from './my-profile.routes';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    APP_ROUTING,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    MyProfileComponent
  ]
})
export class MyProfileModule { }

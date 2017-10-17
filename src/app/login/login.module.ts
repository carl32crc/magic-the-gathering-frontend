import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { APP_ROUTING } from './login.routes';
import { FormComponent } from './form/form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    APP_ROUTING,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [LoginComponent, FormComponent]
})
export class LoginModule { }

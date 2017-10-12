import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_ROUTING } from './register.routes';
import { RegisterComponent } from './register.component';
import { FormComponent } from './form/form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    APP_ROUTING,
    SharedModule
  ],
  declarations: [
    RegisterComponent,
    FormComponent
  ]
})
export class RegisterModule { }

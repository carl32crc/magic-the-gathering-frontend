import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_ROUTING } from './register.routes';
import { RegisterComponent } from './register.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  declarations: [
    RegisterComponent,
    FormComponent
  ]
})
export class RegisterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { APP_ROUTING } from './login.routes';

@NgModule({
  imports: [
    CommonModule,
    APP_ROUTING
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }

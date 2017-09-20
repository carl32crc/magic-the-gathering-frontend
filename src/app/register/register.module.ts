import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_ROUTING } from './register.routes';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    CommonModule,
    APP_ROUTING
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }

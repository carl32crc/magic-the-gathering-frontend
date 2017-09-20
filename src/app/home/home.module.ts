import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_ROUTING } from './home.routes';
import { HomeComponent } from './home.component';


@NgModule({
  imports: [
    CommonModule,
    APP_ROUTING
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }

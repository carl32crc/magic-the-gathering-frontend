import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_ROUTING } from './home.routes';
import { HomeComponent } from './home.component';
import { SlideComponent } from './slide/slide.component';


@NgModule({
  imports: [
    CommonModule,
    APP_ROUTING
  ],
  declarations: [
    HomeComponent,
    SlideComponent
  ]
})
export class HomeModule { }

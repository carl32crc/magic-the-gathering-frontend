import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_ROUTING } from './admin-panel.routes';
import { AdminPanelComponent } from './admin-panel.component';
import { SharedModule } from '../shared/shared.module';
import { ArticlesComponent } from './articles/articles.component';
import { UsersComponent } from './users/users.component';
import { SliderComponent } from './slider/slider.component';
import { FormComponent } from './slider/form/form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    APP_ROUTING,
    SharedModule
  ],
  declarations: [
    AdminPanelComponent,
    ArticlesComponent,
    UsersComponent,
    SliderComponent,
    FormComponent
  ]
})
export class AdminPanelModule { }


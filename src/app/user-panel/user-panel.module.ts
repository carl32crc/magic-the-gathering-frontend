import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_ROUTING } from './user-panel.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { UserPanelComponent } from './user-panel.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    APP_ROUTING,
    SharedModule
  ],
  declarations: [
    UserPanelComponent
  ]
})
export class UserPanelModule { }



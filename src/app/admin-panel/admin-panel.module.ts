import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_ROUTING } from './admin-panel.routes';
import { AdminPanelComponent } from './admin-panel.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    APP_ROUTING,
    SharedModule
  ],
  declarations: [
    AdminPanelComponent
  ]
})
export class AdminPanelModule { }


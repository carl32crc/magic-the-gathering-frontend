import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { FooterComponent } from './shell/footer/footer.component';
import { APP_ROUTING } from './core.routes';
import { SharedModule } from './../shared/shared.module';

import { LocalStorage } from './../utils/local-storage';
import { AdminGuard } from './../utils/guards/admin.guard';
import { UserGuard } from './../utils/guards/user.guard';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    APP_ROUTING
  ],
  declarations: [
    ShellComponent,
    TopBarComponent,
    MainContentComponent,
    FooterComponent
  ],
  exports: [
    ShellComponent
  ],
  providers: [
    AdminGuard,
    UserGuard,
    LocalStorage
  ]
})
export class CoreModule { }

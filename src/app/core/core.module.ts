import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { FooterComponent } from './shell/footer/footer.component';
import { APP_ROUTING } from './core.routes';
import { SharedModule } from './../shared/shared.module';

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
  ]
})
export class CoreModule { }

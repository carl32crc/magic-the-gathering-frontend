import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlErrorsComponent } from './control-errors/control-errors.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ ControlErrorsComponent, ModalComponent ],
  declarations: [ControlErrorsComponent, ModalComponent]
})
export class SharedModule { }

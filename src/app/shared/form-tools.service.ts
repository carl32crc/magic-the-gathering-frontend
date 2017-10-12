import { EmailValidator, FormGroup } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class FormTools {

  constructor(public form: FormGroup) { }

  getControl(controlName: string): AbstractControl {
    return this.form.controls[controlName];
  }

  hasChanges(control: AbstractControl): boolean {
    return control && (control.dirty || control.touched);
  }

  mustShowErrors(controlName: string) {

    const errorsToShow = {
        required: false,
        minLength: false,
        pattern: false,
    };

    const control = this.getControl(controlName);

    if (this.hasChanges(control)) {
      if (control.errors !== null) {
        this.whatError(control.errors, errorsToShow);
      }
    }
    return errorsToShow;
  }

  whatError(error, errorsToShow) {

    if (error.required) {
      return errorsToShow.required = true;
    }

    if (error.minlength) {
      return errorsToShow.minLength = true;
    }

    if (error.pattern) {
      return errorsToShow.pattern = true;
    }

  }

  getControlErrors(form: FormGroup, controlName: string): string {
    let controlErrors = '';
    const control = this.getControl(controlName);
    if (control && control.errors) {
      Object.keys(control.errors).forEach(error => {
        controlErrors += error;
      });
    }
    return controlErrors;
  }

  getDateForControl(date: Date): string {
    return date.toISOString().substring(0, 10);
  }

}

import { FormGroup } from '@angular/forms';
import { FormTools } from './../form-tools.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mtg-control-errors',
  templateUrl: './control-errors.component.html',
  styleUrls: ['./control-errors.component.scss']
})
export class ControlErrorsComponent implements OnInit {

  @Input() private form: FormGroup;
  @Input() private field: string;
  @Input() private error: string;
  @Input() private errorMessage: string;
  @Input() private special: string;
  private formTools: FormTools;

  constructor() { }

  ngOnInit() {
    this.formTools = new FormTools(this.form);
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mtg-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title;
  @Input() message;
  constructor() { }

  ngOnInit() {
  }

}

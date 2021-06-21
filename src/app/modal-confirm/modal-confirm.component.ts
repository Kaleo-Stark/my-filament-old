import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss'],
})
export class ModalConfirmComponent implements OnInit {

  @Output() responseEmit = new EventEmitter();

  @Input() text: String = "";

  constructor() { }

  ngOnInit() {}

  confirmOrNot(response){
    this.responseEmit.emit(response);
  }
}

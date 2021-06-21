import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss'],
})
export class ModalConfirmComponent implements OnInit {

  @Output() responseEmit = new EventEmitter();

  public text = "Tem certeza que deseja apagar o item suporte de notebook ?"

  constructor() { }

  ngOnInit() {}

  confirmOrNot(response){
    this.responseEmit.emit(response);
  }
}

import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-modal-new-filament',
  templateUrl: './modal-new-filament.component.html',
  styleUrls: ['./modal-new-filament.component.scss'],
})
export class ModalNewFilamentComponent implements OnInit {

  public newFilament = {
    filament: '',
    quantityTotal: 0,
    quantitySpent: 0,
    quantitycurrent: 0,
    itensPrinted: []
  }

  constructor(private storage: Storage) {
    
  }

  ngOnInit() {}

  saveNewFilament(){
    if(this.newFilament.filament && (this.newFilament.quantityTotal < 0)){

    }
  }

  cancelNewFilament(){

  }
}

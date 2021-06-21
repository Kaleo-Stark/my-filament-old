import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-modal-new-filament',
  templateUrl: './modal-new-filament.component.html',
  styleUrls: ['./modal-new-filament.component.scss'],
})
export class ModalNewFilamentComponent implements OnInit {

  @Output() newFilamentClose = new EventEmitter();

  public newFilament = {
    filament: '',
    quantityTotal: 0,
    quantitySpent: 0,
    quantitycurrent: 0,
    itensPrinted: []
  }

  constructor(private storage: Storage) { }

  ngOnInit() {}

  saveNewFilament(){
    if(this.newFilament.filament && (this.newFilament.quantityTotal > 0)){
      this.storage.get('listFilaments').then((listFilaments)=>{
        let list = listFilaments;

        list.push(this.newFilament)
        
        this.storage.set('listFilaments', list).then(()=>{
          this.clearDataAndClose(true);
        });
      });
    }
  }

  clearDataAndClose(updateList){
    this.newFilament = {
      filament: '',
      quantityTotal: 0,
      quantitySpent: 0,
      quantitycurrent: 0,
      itensPrinted: []
    }

    this.newFilamentClose.emit(updateList);
  }

  cancelNewFilament(){
    this.clearDataAndClose(false);
  }
}

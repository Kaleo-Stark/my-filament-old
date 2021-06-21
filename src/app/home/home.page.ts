import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storage: Storage) {
    this.storage.create().then(()=>{
      this.populeListFilaments();
    });
  }

  public text = ""

  public texts = {
    'delete-filament': (name) => {return `Tem certeza que deseja apagar o filamento ${name} ?`},
  }

  public typeConfirm = {
    type: '',
    index: 0
  };

  public listFilaments: any = [];

  public selectedFilament = {
    name: '',
    total: 0,
    spent: 0,
    current: '',
    intemsList: []
  }

  populeListFilaments(){
    this.storage.get('listFilaments').then((listFilaments)=>{
      if(listFilaments){
        this.listFilaments = listFilaments;
      }else{
        this.storage.set('listFilaments', []);
      }
    });
  }

  responseModalConfirm(response){
    if(response){
      if(this.typeConfirm.type == 'delete-filament'){
        this.listFilaments.splice(this.typeConfirm.index, 1);

        this.storage.set('listFilaments', this.listFilaments).then(()=>{
          this.closeModal('confirm');    
        });
      }
    }else{
      this.closeModal('confirm');
    }
  }

  openModal(modalName){
    document.querySelector(`div[name="${modalName}"]`).classList.remove('modal-off');
  }

  closeModal(modalName){
    document.querySelector(`div[name="${modalName}"]`).classList.add('modal-off')
  }

  newFilamentClose(updateLis){
    if(updateLis){
      this.populeListFilaments();
    }

    this.closeModal('new-filament');
  }

  confirmModal(text, name){
    this.text = this.texts[text](name);

    this.openModal('confirm');
  }

  deleteFilament(indexFilament){
    this.typeConfirm.index = indexFilament;

    this.typeConfirm.type = 'delete-filament';

    this.confirmModal('delete-filament', this.listFilaments[indexFilament].filament);
  }
}

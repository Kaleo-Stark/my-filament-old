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
      this.storage.get('listFilaments').then((listFilaments)=>{
        if(listFilaments){
          this.listFilaments = listFilaments;
        }else{
          this.storage.set('listFilaments', []);
        }
      });
    });
  }

  public text = "tem certeza que deseja excluir o item tal ?"

  public listFilaments = [];

  public selectedFilament = {
    name: '',
    total: 0,
    spent: 0,
    current: '',
    intemsList: []
  }

  responseModalConfirm(response){
    console.log(response)
  }
}

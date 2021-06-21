import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public filamentList = [];

  public selectedFilament = {
    name: '',
    total: 0,
    spent: 0,
    current: '',
    intemsList: []
  }

  
}

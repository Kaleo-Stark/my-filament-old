import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component'
import { ModalNewFilamentComponent } from '../modal-new-filament/modal-new-filament.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ModalConfirmComponent, ModalNewFilamentComponent]
})
export class HomePageModule {}

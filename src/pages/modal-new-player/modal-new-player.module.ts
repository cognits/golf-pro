import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalNewPlayerPage } from './modal-new-player';

@NgModule({
  declarations: [
    ModalNewPlayerPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalNewPlayerPage),
  ],
})
export class ModalNewPlayerPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPlayerAddedPage } from './modal-player-added';

@NgModule({
  declarations: [
    ModalPlayerAddedPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPlayerAddedPage),
  ],
})
export class ModalPlayerAddedPageModule {}

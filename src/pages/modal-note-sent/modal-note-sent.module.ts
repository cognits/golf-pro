import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalNoteSentPage } from './modal-note-sent';

@NgModule({
  declarations: [
    ModalNoteSentPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalNoteSentPage),
  ],
})
export class ModalNoteSentPageModule {}

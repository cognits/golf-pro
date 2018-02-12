import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalNewNotePage } from './modal-new-note';

@NgModule({
  declarations: [
    ModalNewNotePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalNewNotePage),
  ],
})
export class ModalNewNotePageModule {}

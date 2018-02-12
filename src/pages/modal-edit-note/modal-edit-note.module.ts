import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalEditNotePage } from './modal-edit-note';

@NgModule({
  declarations: [
    ModalEditNotePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalEditNotePage),
  ],
})
export class ModalEditNotePageModule {}

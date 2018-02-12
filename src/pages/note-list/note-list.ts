import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalEditNotePage } from '../modal-edit-note/modal-edit-note';
import { ModalNewNotePage } from '../modal-new-note/modal-new-note';

/**
 * Generated class for the NoteListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-note-list',
  templateUrl: 'note-list.html',
})
export class NoteListPage {
  footer: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.footer = document.querySelector('.ionFooter');
  }

  ionViewWillEnter(){
    this.footer.style.display = 'none';
  }

  ionViewWillLeave(){
    this.footer.style.display = 'flex';
  }

  showModal(modal){
    let modalEdit = this.modalCtrl.create(modal)
    modalEdit.present();
  }

  go_back() {
    this.navCtrl.pop();
  }

}

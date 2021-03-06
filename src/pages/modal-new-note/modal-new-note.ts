import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { ModalNoteSentPage } from '../modal-note-sent/modal-note-sent';

/**
 * Generated class for the ModalNewNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-new-note',
  templateUrl: 'modal-new-note.html',
})
export class ModalNewNotePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public modalCtrl: ModalController) {
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  showModal(){
    let modalEdit = this.modalCtrl.create('ModalNoteSentPage')
    modalEdit.present();
    this.closeModal();
  }

}

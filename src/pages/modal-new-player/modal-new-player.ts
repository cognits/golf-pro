import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { ModalPlayerAddedPage } from '../modal-player-added/modal-player-added';

/**
 * Generated class for the ModalNewPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-new-player',
  templateUrl: 'modal-new-player.html',
})
export class ModalNewPlayerPage {
  sliderOptions = {
    pager: true,
    onlyExternal: true
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public modalCtrl: ModalController) {
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  // show modal success player adeed

  showModal(){
    let modalPlayerAdded = this.modalCtrl.create('ModalPlayerAddedPage')
    modalPlayerAdded.present();
    this.closeModal()
  }

}

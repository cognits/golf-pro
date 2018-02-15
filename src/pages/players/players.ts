import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PlayerProfileLockerPage } from '../player-profile-locker/player-profile-locker';
import { ModalFilterPage } from '../modal-filter/modal-filter';

/**
 * Generated class for the PlayersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-players',
  templateUrl: 'players.html',
})
export class PlayersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }


  navigateToPlayer() {
    this.navCtrl.push(PlayerProfileLockerPage)
  }

  showModal(modal){
    let modalFilter = this.modalCtrl.create(modal)
    modalFilter.present();
  }

}

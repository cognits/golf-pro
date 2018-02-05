import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlayersPage } from '../players/players';

/**
 * Generated class for the PlayerProfileLockerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-player-profile-locker',
  templateUrl: 'player-profile-locker.html',
})
export class PlayerProfileLockerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  back_to_players(){
    this.navCtrl.pop(PlayersPage);
    console.log("players")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerProfileLockerPage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlayersPage } from '../players/players';
import { NoteListPage } from '../note-list/note-list';

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
  profile_locker: string = "profile";

  constructor(public navCtrl: NavController) {
  }

  back_to_players(){
    this.navCtrl.pop();
  }

  go_notes(){
    this.navCtrl.push(NoteListPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerProfileLockerPage');
  }

}

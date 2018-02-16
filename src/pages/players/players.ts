import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PlayerProfileLockerPage } from '../player-profile-locker/player-profile-locker';
import { ModalFilterPage } from '../modal-filter/modal-filter';
import { HTTP } from '@ionic-native/http';

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
groceries: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,public http: HTTP) {

    this.http.get('https://staging-api.junior.golf/v1/users/facility/78/players/snippet/', {}, {'Content-Type':'text/csv','Authorization':'Bearer PYb5nbP25ERdHC572N3b1Xplbspazr','X-MLG-Api':'61fb380fa50d7d03cd18148bc3d1ba70ab1b3522'})
   .then(data => {
    // alert('succes')
     // alert(data)
     //alert(JSON.stringify(data.data))
     this.groceries = JSON.parse(data.data).results
    // this.groceries = data.data.results
     console.log(data.status);
     console.log(data.data); // data received by server
     console.log(data.headers);

   })
   .catch(error => {
     alert('error')
     alert(JSON.stringify(error))
     console.log(error)
     console.log(error.status);
     console.log(error.error); // error message as string
     console.log(error.headers);

   });

  }
  //var people = {}
  // openUrl(){
  //  console.log('hola')
//'https://staging-api.junior.golf/o/token/', {grant_type:'password',username:'Kony.pro@junior.golf',password:'K0nyG0!f'}, {'Content-Type':'application/x-www-form-urlencoded','Authorization':'Basic Y25TS2huOG5SQ0pJNWVSU1pmaVJ3ZERFVElRTVl6a3kzY0xsNFN1ZTpQNkNZUGhDUWtSajJxUG8wb1hqNGFuQXRkWThjSVIwcmVHTVBDSEt0Sml0MEhOMjhNSm5OQlM5Q0lvclFUTk5LQ2pNZW1pdjUxZWlxZURkeWFxcnNKUjI1TkJkWnczaTJYbWdscTVqZnVSd0tkbXZQd3VlMDJVcndyb0RCakk1MQ=='}

  // }
  // openUrl()
  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayersPage');
  }

  navigateToPlayer(idPeople) {
    var data = {
    id: idPeople
  };
    this.navCtrl.push(PlayerProfileLockerPage,data)
  }

  showModal(modal){
    let modalFilter = this.modalCtrl.create(modal)
    modalFilter.present();
  }

}

import { Component } from '@angular/core';
// import { IonicPage, NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { PlayerProfileLockerPage } from '../pages/player-profile-locker/player-profile-locker';
import { PlayersPage } from '../pages/players/players';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = PlayersPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

   public iconNavFooter = ['assets/img/nav_agenda_off.png', 'assets/img/nav_activities_off.png', 'assets/img/nav_players_on.png', 'assets/img/nav_messages_off.png', 'assets/img/nav_profile_off.png']
   public textFooterClass = ['textFooter', 'textFooter', 'textFooterOn', 'textFooter', 'textFooter'];

   clickFooter(num){
     if(num == 0){
       this.iconNavFooter =  ['assets/img/nav_agenda_on.png', 'assets/img/nav_activities_off.png', 'assets/img/nav_players_off.png', 'assets/img/nav_messages_off.png', 'assets/img/nav_profile_off.png'];
       this.textFooterClass = ['textFooterOn', 'textFooter', 'textFooter', 'textFooter', 'textFooter'];
     }

     if(num == 1){
       this.iconNavFooter =  ['assets/img/nav_agenda_off.png', 'assets/img/nav_activities_on.png', 'assets/img/nav_players_off.png', 'assets/img/nav_messages_off.png', 'assets/img/nav_profile_off.png'];
       this.textFooterClass = ['textFooter', 'textFooterOn', 'textFooter', 'textFooter', 'textFooter'];
     }

     if(num == 2){
       this.iconNavFooter =  ['assets/img/nav_agenda_off.png', 'assets/img/nav_activities_off.png', 'assets/img/nav_players_on.png', 'assets/img/nav_messages_off.png', 'assets/img/nav_profile_off.png'];
       this.textFooterClass = ['textFooter', 'textFooter', 'textFooterOn', 'textFooter', 'textFooter'];
     }

     if(num == 3){
       this.iconNavFooter =  ['assets/img/nav_agenda_off.png', 'assets/img/nav_activities_off.png', 'assets/img/nav_players_off.png', 'assets/img/nav_messages_on.png', 'assets/img/nav_profile_off.png'];
       this.textFooterClass = ['textFooter', 'textFooter', 'textFooter', 'textFooterOn', 'textFooter'];
     }

     if(num == 4){
       this.iconNavFooter =  ['assets/img/nav_agenda_off.png', 'assets/img/nav_activities_off.png', 'assets/img/nav_players_off.png', 'assets/img/nav_messages_off.png', 'assets/img/nav_profile_on.png'];
       this.textFooterClass = ['textFooter', 'textFooter', 'textFooter', 'textFooter', 'textFooterOn'];
     }

   }
}

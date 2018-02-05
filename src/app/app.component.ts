import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { PlayerProfileLockerPage } from '../pages/player-profile-locker/player-profile-locker';

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

   iconNavFooter:any = ['assets/img/nav_agenda_off.png', 'assets/img/nav_activities_off.png', 'assets/img/nav_players_on.png', 'assets/img/nav_messages_off.png', 'assets/img/nav_profile_off.png']

}

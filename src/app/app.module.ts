import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { PlayersPage } from '../pages/players/players';
import { PlayerProfileLockerPage } from '../pages/player-profile-locker/player-profile-locker';
import { ProfilePage } from '../pages/profile/profile';
import { NoteListPage } from '../pages/note-list/note-list';
import { HTTP } from '@ionic-native/http';



@NgModule({
  declarations: [
    MyApp,
    PlayersPage,
    PlayerProfileLockerPage,
    NoteListPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PlayersPage,
    PlayerProfileLockerPage,
    NoteListPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

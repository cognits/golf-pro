import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { PlayersPage } from '../pages/players/players';
import { PlayerProfileLockerPage } from '../pages/player-profile-locker/player-profile-locker';
import { NoteListPage } from '../pages/note-list/note-list';
import { FooterPage } from '../pages/footer/footer';


@NgModule({
  declarations: [
    MyApp,
    PlayersPage,
    PlayerProfileLockerPage,
    NoteListPage,
    //FooterPage
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
    //FooterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

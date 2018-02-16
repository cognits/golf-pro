import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayersPage } from './players';
import { HTTP } from '@ionic-native/http';

@NgModule({
  declarations: [
    PlayersPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayersPage),
  ],  providers: [
      HTTP
    ]
})
export class PlayersPageModule {}

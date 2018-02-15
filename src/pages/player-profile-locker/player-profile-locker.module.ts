import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerProfileLockerPage } from './player-profile-locker';
import { HTTP } from '@ionic-native/http';

@NgModule({
  declarations: [
    PlayerProfileLockerPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayerProfileLockerPage),
  ],
})
export class PlayerProfileLockerPageModule {}

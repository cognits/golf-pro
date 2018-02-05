import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerProfileLockerPage } from './player-profile-locker';

@NgModule({
  declarations: [
    PlayerProfileLockerPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayerProfileLockerPage),
  ],
})
export class PlayerProfileLockerPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Activity1Page } from './activity1';

@NgModule({
  declarations: [
    Activity1Page,
  ],
  imports: [
    IonicPageModule.forChild(Activity1Page),
  ],
  exports: [
    Activity1Page
  ]
})
export class Activity1PageModule {}

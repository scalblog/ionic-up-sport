import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssoPage } from './asso';

@NgModule({
  declarations: [
    AssoPage,
  ],
  imports: [
    IonicPageModule.forChild(AssoPage),
  ],
  exports: [
    AssoPage
  ]
})
export class AssoPageModule {}

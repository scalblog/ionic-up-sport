import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';

import { SMS } from '@ionic-native/sms';

@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
  ],
  exports: [
    ContactPage
  ]
})
export class ContactPageModule {}

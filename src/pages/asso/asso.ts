import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ContactPage } from '../contact/contact';
/**
 * Generated class for the AssoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-asso',
  templateUrl: 'asso.html',
})
export class AssoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  openContact() {
    this.navCtrl.push(ContactPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssoPage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ContactPage } from '../contact/contact';
/**
 * Generated class for the TeamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openContact() {
    this.navCtrl.push(ContactPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamPage');
  }

}

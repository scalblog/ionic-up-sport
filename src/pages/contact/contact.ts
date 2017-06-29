import { Component } from '@angular/core';
import { SMS } from '@ionic-native/sms';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


/**
 * Generated class for the ContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  phoneNumber : string;
  textMessage: string;

  constructor(private toast : ToastController, private sms: SMS, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  async sendTextMessage(){

 //    this.sms.send('+33661908251', 'Hello world!');

    try {

      await this.sms.send(this.phoneNumber, this.textMessage);
      const toast = this.toast.create({
        message : "SMS envoyé.",
        duration : 3000
      });
      toast.present();

    }
    catch (e){
    const toast = this.toast.create({
      message : "Echec lors de l'envoi du SMS.",
      duration : 3000
    });
    toast.present();
    }

  }

}

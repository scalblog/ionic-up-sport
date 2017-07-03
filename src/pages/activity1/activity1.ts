import { Component } from '@angular/core';
import { SMS } from '@ionic-native/sms';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the Activity1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-activity1',
  templateUrl: 'activity1.html',
})
export class Activity1Page {
  public phoneNumber : string = "+33661908251";
  public textMessage : string ="Bonjour. Je souhaite m'inscrire au prochain Run'Up. A bientôt.";

  constructor(private toast : ToastController, private sms: SMS, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Activity1Page');
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
    console.log(e);
    }

  }
}

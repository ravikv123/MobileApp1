import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import {HomePage} from '../home/home';
 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 
  constructor(public navCtrl: NavController, private faio: FingerprintAIO) {
  }
  
   
// Run on Login Page
ionViewDidLoad() {
    this.login()
    }

  login() {
       //   this.navCtrl.setRoot(HomePage);
    this.faio.show({
      clientId: 'Fingerprint-Demo',
      clientSecret: 'password', // Only Android
      localizedFallbackTitle: 'Use Pin', // Only iOS
      localizedReason: 'Please authenticate' // Only iOS
    })
      .then((result: any) => {
        this.navCtrl.setRoot(HomePage);
      })
      .catch((error: any) => {
        console.log('err: ', error);
      });
  }
}
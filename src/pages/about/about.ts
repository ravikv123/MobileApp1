import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PeopleServiceProvider} from '../../providers/people-service/people-service';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [PeopleServiceProvider]

})
export class AboutPage {
public aboutTest;
public people: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public peopleService: PeopleServiceProvider) {
  this.aboutTest=" ABOUT RAVI";
  this.loadPeople();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  loadPeople(){
    this.peopleService.getUsers()
    .then(data => {
      console.log(this.people);
      this.people = data["results"];
    });
}


}

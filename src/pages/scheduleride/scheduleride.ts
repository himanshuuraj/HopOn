import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';
/**
 * Generated class for the Scheduleride page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-scheduleride',
  templateUrl: 'scheduleride.html',
})
export class Scheduleride {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Scheduleride');
  }

  moveToNextPage(){
    this.navCtrl.setRoot(MainPage);
  }

}

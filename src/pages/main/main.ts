import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {PickUpTimePage} from '../pick-up-time/pick-up-time';

/**
 * Generated class for the MainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  homeAddress
  workAddress

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.workAddress = window.localStorage.workAddress;
    this.homeAddress = window.localStorage.homeAddress;
    /*if(this.navParams.get("workAddress")){
        this.workAddress = window.localStorage.workAddress = this.navParams.get("workAddress");
    }
    else if(this.navParams.get("homeAddress")){
      this.homeAddress = window.localStorage.homeAddress = this.navParams.get("homeAddress");
    }*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  moveToSearch(addressType){
    var obj = {};
    obj["addressType"] = addressType;
    this.navCtrl.push(HomePage,obj);
  }

  moveToPickUpTime(addressType){
    var obj = {};
    obj["addressType"] = addressType;
    this.navCtrl.push(PickUpTimePage,obj);
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MainPage} from '../main/main';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  address
  addressType
  constructor(public navCtrl: NavController,private navParams: NavParams) {
    this.addressType = this.navParams.get('addressType');
  }

  setAddress(){
    console.log(this.address);
    window.localStorage[this.addressType] = this.address;
    this.navCtrl.pop(MainPage);
  }

}

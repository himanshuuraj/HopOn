import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Scheduleride } from '../scheduleride/scheduleride';
import {AlertController} from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  imageUploadFlag = false;
  base64Image;
  firstName;
  lastName;
  phoneNumber;
  reEnteredPhoneNumber
  checkStatus
  pageNumber = 'first';
  contactsArray
  flagToEdit = 0;
  prayerCircleCreated

  constructor(public navCtrl: NavController,public navParams: NavParams,private alertCtrl: AlertController,public camera: Camera) {
    var param = navParams.get("param");
    window.localStorage.prayerCircleCreated = "";
    this.prayerCircleCreated = "";
    if(param == "edit"){
      this.pageNumber = "edit";
      this.base64Image = (window.localStorage.base64Image == "undefined") ? "" : window.localStorage.base64Image;
      this.firstName = window.localStorage.firstName;
      this.lastName = window.localStorage.lastName;
      this.phoneNumber = window.localStorage.phoneNumber;
      this.reEnteredPhoneNumber = window.localStorage.reEnteredPhoneNumber;
      window.localStorage.prayerCircleCreated = 1;
      this.prayerCircleCreated = 1;
    }
    if(param == 'contact'){
      this.pageNumber = 'second';
    }
  }

  changePage(){
    if(!window.localStorage.prayerCircleCreated && this.pageNumber != "second"){
      this.pageNumber = "second";
    }else{
      //this.navCtrl.setRoot(HomeScreenPage);
    }
  }

  showAlert(title,subtitle,buttonString) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: [buttonString]
    });
    alert.present();
  }

  makejson(){

    if(!this.firstName){
      this.showAlert("Message","Please Enter First Name",'Dismiss');
      return;
      }

      if(!this.lastName){
        this.showAlert("Message","Please Enter Last Name",'Dismiss');
        return;
        }

        if(!this.phoneNumber){
          this.showAlert("Message","Please Enter Phone Number",'Dismiss');
          return;
          }

        if(this.phoneNumber.length != 10){
            this.showAlert("Message","Please Enter 10 digit phone number",'Dismiss');
            return;
        }

        if(this.phoneNumber != this.reEnteredPhoneNumber){
          this.showAlert("Message","Phone Numbers are not matching",'Dismiss');
          return;
        }

        if(!this.prayerCircleCreated && !this.checkStatus){
          this.showAlert("Message","Please check terms and conditions",'Dismiss');
          return;
        }
          this.navCtrl.setRoot(Scheduleride);
        var headers = new Headers();
        headers.append("Accept", 'application/json');
       headers.append('Content-Type', 'application/x-www-form-urlencoded' );
       let options = new RequestOptions({ headers: headers });

      let imgb = "";
      if(this.base64Image)
       imgb = this.base64Image.replace(/\+/g, '%2B');
       let datas = {
         data : {
           firstname: this.firstName,
           lastname: this.lastName,
           phonenumber: this.phoneNumber,
           base64img :  imgb
                 }
       };
      var params = 'data='+JSON.stringify(datas.data);
        window.localStorage.firstName = this.firstName;
        window.localStorage.lastName = this.lastName;
        window.localStorage.phoneNumber = this.phoneNumber;
        window.localStorage.base64Image = this.base64Image;
        window.localStorage.reEnteredPhoneNumber = this.reEnteredPhoneNumber;
        var url = "http://35.166.81.58/cpp/userprofiles/";
        if(this.flagToEdit){
          url += "update";
        }else{
          url += "create";
        }
/*       this.http.post(url, params, options)
         .subscribe(msg => {

          }, error => {
           //this.showAlert("Message","Error in creating profile",'Dismiss');
         });*/
  }

  checkedDataObject = {
    check : true
  };

  openFilters(){
    window.localStorage.prayerCircleCreated = 1;
    this.prayerCircleCreated = 1;
    /*this.navCtrl.setRoot(Prayercircle,{
            contactsArray: this.contactsArray,
            fof : this.checkedDataObject["check"]
          });*/
  }

  sendToHomeScreen(){
    //this.navCtrl.setRoot(HomeScreenPage);
  }

  moveToEditScreen(){
    this.flagToEdit = 1;
    this.pageNumber = "first";
  }

  closeModal(){
    //this.modalElement.style.display = "none";
  }

  getImageFromGallery(){
    this.camera.getPicture({
       sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
       destinationType: this.camera.DestinationType.DATA_URL
      }).then((imageData) => {
        this.imageUploadFlag = true;
        this.base64Image = 'data:image/jpeg;base64,'+imageData;
       }, (err) => {
        console.log(err);
      });
  }

  showModal(){
    //this.navCtrl.push(TermsAndConditionsPage);
  }

  getContacts(){
      /*this.contact.find(['displayName', 'phoneNumbers'], {filter: "", multiple: true, desiredFields : ["displayName","phoneNumbers"], hasPhoneNumber : true})
     .then(data => {
       var temp;
       var dataToSend = [];
       for(var index = 0;index < data.length; index++){
          var x = data[index];
          x = x["_objectInstance"];
          if(!x.phoneNumbers)
            continue;
          var y = {};
          y["name"] = x.displayName;
          y["phonenumber"]  = [];
          var tempPhone = x.phoneNumbers || [];
          temp = tempPhone.length;
          for(var index1 = 0; index1 < tempPhone.length; index1++)
              y["phonenumber"].push(tempPhone[index1].value);
          dataToSend.push(y);
       }
       this.contactsArray = dataToSend;
       window.localStorage.contactsArray = dataToSend;
       this.openFilters();
     });*/
  }

}

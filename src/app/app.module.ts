import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import {PickUpTimePage} from '../pages/pick-up-time/pick-up-time';
import { LoginPage } from '../pages/login/login';
import { Scheduleride } from '../pages/scheduleride/scheduleride';
import { BeginPage } from '../pages/begin/begin';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    LoginPage,
    PickUpTimePage,
    Scheduleride,
    BeginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    PickUpTimePage,
    LoginPage,
    Scheduleride,
    BeginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

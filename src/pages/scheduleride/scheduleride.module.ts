import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Scheduleride } from './scheduleride';

@NgModule({
  declarations: [
    Scheduleride,
  ],
  imports: [
    IonicPageModule.forChild(Scheduleride),
  ],
  exports: [
    Scheduleride
  ]
})
export class SchedulerideModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ReportingPage } from '../pages/reporting/reporting';
import { IonicStorageModule } from '@ionic/storage';
import { DataService } from '../providers/shared/shared';
import { ReportingDetailsPage } from '../pages/reporting-details/reporting-details';
import { EmergenceyListPage } from '../pages/emergencey-list/emergencey-list';
import { Geolocation } from "@ionic-native/geolocation";
import { Camera } from '@ionic-native/camera';
import {  DeviceMotion } from '@ionic-native/device-motion';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ReportingPage,
    ReportingDetailsPage,
    EmergenceyListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name:'__mydb',
      driverOrder:['indexeddb','sqlite','websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ReportingPage,
    ReportingDetailsPage,
    EmergenceyListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataService,Geolocation,Camera, DeviceMotion
  ]
})
export class AppModule {}

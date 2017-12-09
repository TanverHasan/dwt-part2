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
import { GoogleMaps  } from '@ionic-native/google-maps';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { CloudListPage } from '../pages/cloud-list/cloud-list';
import { CloudListDetailsPage } from '../pages/cloud-list-details/cloud-list-details';

var config = {
  apiKey: "AIzaSyCct1jUjEtMF0GkXDbarnl1TGutc4X9Hnc",
  authDomain: "dwt-coursework.firebaseapp.com",
  databaseURL: "https://dwt-coursework.firebaseio.com",
  projectId: "dwt-coursework",
  storageBucket: "dwt-coursework.appspot.com",
  messagingSenderId: "134278989257"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ReportingPage,
    ReportingDetailsPage,
    EmergenceyListPage,
    CloudListPage,
    CloudListDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBOtXrZS6MVOMnHDH67wosB54F0vTE6B-w'
    }),
    AngularFireModule.initializeApp(config),AngularFirestoreModule,
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
    EmergenceyListPage,
    CloudListPage,
    CloudListDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataService,Geolocation,Camera, DeviceMotion, GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}

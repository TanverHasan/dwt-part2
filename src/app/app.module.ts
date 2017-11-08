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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ReportingPage,
    ReportingDetailsPage
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
    ReportingDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},Storage,
    DataService
  ]
})
export class AppModule {}

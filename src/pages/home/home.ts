import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReportingPage } from '../reporting/reporting';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  clickMe(){
    this.navCtrl.push(ReportingPage);
   console.log("Hello world");
  }
}

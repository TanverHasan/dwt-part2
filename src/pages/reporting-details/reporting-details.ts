import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { IReporting } from "../../providers/shared/shared";

/**
 * Generated class for the ReportingDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-reporting-details",
  templateUrl: "reporting-details.html"
})
export class ReportingDetailsPage {
  item: IReporting;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.data;
    console.log(this.item.date);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ReportingDetailsPage");

  }
}

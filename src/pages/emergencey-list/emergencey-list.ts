import { Component } from "@angular/core";
import { NavController, NavParams, LoadingController } from "ionic-angular";
import { DataService, IReporting } from "../../providers/shared/shared";
import { ReportingDetailsPage } from "../reporting-details/reporting-details";

@Component({
  selector: "page-emergencey-list",
  templateUrl: "emergencey-list.html"
})
export class EmergenceyListPage {
  hotList: IReporting[] = [];
  items: Array<IReporting> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private st: DataService,
    public loadingCtrl: LoadingController
  ) {
    let loader = this.loadingCtrl.create({
      content: "Getting data"
    });
    loader.present().then(() => {
      this.st
        .getAllItems()
        .then(val => {
          val.filter(s => {
            if (s.hotItem === true) {
              this.hotList.push(s );
            }
          });
        })
        .then(() => {
          loader.dismiss().then(() => {});
        });
    });

    // console.log(this.items);
    // this.items.filter(data => {
    //    console.log(data);

    // });
  }
  itemTapped($event, reportingItem) {
    this.navCtrl.push(ReportingDetailsPage, reportingItem);
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad EmergenceyListPage");
  }
  doRefresh(refresher) {
    console.log("Begin async operation", refresher);

    setTimeout(() => {
      console.log("Async operation has ended");
      refresher.complete();
    }, 2000);
  }
}

import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { DataService, IReporting } from "../../providers/shared/shared";
import { Observable } from "rxjs/Observable";
import { CloudListDetailsPage } from "../cloud-list-details/cloud-list-details";
import { LoadingController } from "ionic-angular/components/loading/loading-controller";

/**
 * Generated class for the CloudListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-cloud-list",
  templateUrl: "cloud-list.html"
})
export class CloudListPage {
  cloudData: { id: string; data: IReporting; }[];




  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private data: DataService,
    private loadingCtrl: LoadingController
  ) {
    let loader = this.loadingCtrl.create({
      content: "Getting data"
    });
    loader.present().then(() => {
      this.loadFromCloud();
      loader.dismiss().then(() => {});
    });

  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CloudListPage");
  }

  loadFromCloud() {
    this.data.getAllFromCloud().subscribe(res => {
      this.cloudData = res;
    });
  }
  itemTapped($event, reportingItem) {
    this.navCtrl.push(CloudListDetailsPage, reportingItem);
  }
}

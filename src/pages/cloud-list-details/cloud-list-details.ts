import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { IReporting, DataService } from "../../providers/shared/shared";
import { CloudListPage } from "../cloud-list/cloud-list";

/**
 * Generated class for the CloudListDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-cloud-list-details",
  templateUrl: "cloud-list-details.html"
})
export class CloudListDetailsPage {
  id: any;
  item: IReporting;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public data: DataService
  ) {
    this.id = this.navParams.data;
    console.log(this.id);
    this.loadData();
  }

  loadData() {
    this.data.getFromCloudById(this.id).subscribe(res => {
      this.item = res;
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CloudListDetailsPage");
  }
  remove(){
    this.data.removeFromCloud(this.id);
    this.navCtrl.push(CloudListPage);
  }
}

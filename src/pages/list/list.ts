import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  AlertController,
  LoadingController
} from "ionic-angular";
import { DataService } from "../../providers/shared/shared";
import { ReportingDetailsPage } from "../reporting-details/reporting-details";

@Component({
  selector: "page-list",
  templateUrl: "list.html"
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private stData: DataService,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {
    let loader = this.loadingCtrl.create({
      content: "Getting data",
      dismissOnPageChange: true
    });
    loader.present();

    this.stData.getData().then(val => {
      this.items = val;
    });
  }
  ionViewLoaded() {

  }
  itemTapped($event,reportingItem){
    this.navCtrl.push(ReportingDetailsPage,reportingItem)
  }
  removeAll() {
    const alert = this.alertCtrl.create({
      title: "Clear Database",
      subTitle: "You are deleting all your reporting items",
      buttons: ["OK"]
    });
    alert.present();
    this.stData.clearSotrage();
  }
  Search() {
    console.log("search clicked");
  }
}

//  // If we navigated to this page, we will have an item available as a nav param
//  this.selectedItem = navParams.get('item');

//      // Let's populate this page with some filler content for funzies
//      this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
//      'american-football', 'boat', 'bluetooth', 'build'];

//      this.items = [];
//      for (let i = 1; i < 11; i++) {
//        this.items.push({
//          title: 'Item ' + i,
//          note: 'This is item #' + i,
//          icon: this.icons[Math.floor(Math.random() * this.icons.length)]
//        });
//      }

// itemTapped(event, item) {
//   // That's right, we're pushing to ourselves!
//   this.navCtrl.push(ListPage, {
//     item: item
//   });
// }

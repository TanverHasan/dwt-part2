import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  AlertController,
  LoadingController
} from "ionic-angular";
import { DataService, IReporting } from "../../providers/shared/shared";
import { ReportingDetailsPage } from "../reporting-details/reporting-details";
import { AngularFireModule } from "angularfire2";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "page-list",
  templateUrl: "list.html"
})
export class ListPage {
  localData: IReporting[];
  cloudData: IReporting[];
  selectedItem: any;
  icons: string[];
  items: IReporting[];
  searchInput: string;
  lastKeypress: number = 0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private stData: DataService,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {
    let loader = this.loadingCtrl.create({
      content: "Getting data"
    });
    loader.present().then(() => {
      this.loadData();
      loader.dismiss().then(() => {});
    });
  }

  loadData() {
    this.stData.getAllItems().then(val => {
      this.items = val;
      console.log(this.items);
    });
  }

  itemTapped($event, reportingItem) {
    this.navCtrl.push(ReportingDetailsPage, reportingItem);
  }

  removeAll() {
    const alert = this.alertCtrl.create({
      title: "Clear Database",
      subTitle: "You are deleting all your reporting items",
      buttons: ["OK"]
    });
    alert.present().then(() => {
      this.stData.clearSotrage();
      this.items = [];
    });
  }
  Search($event) {
    let s = $event.target.value;

    if (s != "") {
      if (this.items.length > 0) {
        // console.log(this.items);
        this.items = this.items.filter(f => {
          return f.name.toLowerCase().indexOf(s.toLowerCase()) > -1;
        });
      }
    } else {
      this.loadData();
    }
  }
  onCancel() {
    this.loadData();
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

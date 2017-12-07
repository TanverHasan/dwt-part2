import { Component } from "@angular/core";
import { NavController, NavParams, ToastController } from "ionic-angular";
import { IReporting, DataService } from "../../providers/shared/shared";
import { ListPage } from "../list/list";
import * as _ from "lodash";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from "@ionic-native/google-maps";

@Component({
  selector: "page-reporting-details",
  templateUrl: "reporting-details.html"
})
export class ReportingDetailsPage {
  item: IReporting;
  isAlert = false;
  map: GoogleMap;
  mapReady: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private st: DataService,
    public toastCtrl: ToastController,
  ) {
    this.item = this.navParams.data;
    console.log(this.item.date);

    this.st.getItemById(this.item.id).then(val => {
      if (val.hotItem == true) {
        this.isAlert = true;
      }
    });
    this.loadMap();
  }


  addAlert() {
    this.isAlert = true;
    this.item.hotItem = true;
    this.st.addToAlert(this.item, this.item.id);
  }
  remove() {
    this.st.removeItem(this.item.id).then(val => {
      if (val == true) {
        this.navCtrl.push(ListPage);
      }
    });
  }
  GetAlertedItem() {}

  loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.item.location.lat,
          lng: this.item.location.lon
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create("map_canvas", mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log("Map is ready!");
      this.mapReady = true;
    });
  }
  // Now you can use all methods safely.
  onButtonClick() {
    if (!this.mapReady) {
      this.showToast("Map is not ready yet try again");
      return;
    }
    this.map.clear();
    this.map
      .addMarker({
        title: "Ionic",
        icon: "blue",
        animation: "DROP",
        position: {
          lat: this.item.location.lat,
          lng: this.item.location.lon
        }
      })
      .then(marker => {
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          this.showToast("clicked");
        });
      });
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: "middle"
    });

    toast.present(toast);
  }
}

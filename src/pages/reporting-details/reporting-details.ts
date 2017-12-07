import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { IReporting, DataService } from "../../providers/shared/shared";
import { ListPage } from "../list/list";
//import * as _ from 'lodash';
// import {
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsEvent,
//   GoogleMapOptions,
//   CameraPosition,
//   MarkerOptions,
//   Marker
// } from "@ionic-native/google-maps";

@Component({
  selector: "page-reporting-details",
  templateUrl: "reporting-details.html"
})
export class ReportingDetailsPage {
  item: IReporting;
  isAlert = false;
  // map: GoogleMap;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private st: DataService,
    // private googleMaps: GoogleMaps
  ) {
    this.item = this.navParams.data;
    console.log(this.item.date);

    this.st.getItemById(this.item.id).then(val => {
      if (val.hotItem == true) {
        this.isAlert = true;
      }
    });
  }
  ionViewDidLoad() {
    // this.loadMap();
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

  // loadMap() {
  //   let mapOptions: GoogleMapOptions = {
  //     camera: {
  //       target: {
  //         lat: this.item.location.lat,
  //         lng:this.item.location.lon
  //       },
  //       zoom: 18,
  //       tilt: 30
  //     }
  //   };

  //   this.map = this.googleMaps.create("map", mapOptions);

  //   // Wait the MAP_READY before using any methods.
  //   this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
  //     console.log("Map is ready!");

  //     // Now you can use all methods safely.
  //     this.map
  //       .addMarker({
  //         title: "Ionic",
  //         icon: "blue",
  //         animation: "DROP",
  //         position: {
  //           lat: this.item.location.lat,
  //           lng: this.item.location.lon
  //         }
  //       })
  //       .then(marker => {
  //         marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
  //           alert("clicked");
  //         });
  //       });
  //   });
  // }
}

import { Component } from "@angular/core";
import { NavController, Platform } from "ionic-angular";
import { ReportingPage } from "../reporting/reporting";
import {
  DeviceMotion,
  DeviceMotionAccelerationData
} from "@ionic-native/device-motion";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  x: any;
  y: any;
  z: any;

  constructor(
    public navCtrl: NavController,
    private deviceMotion: DeviceMotion,
    private platform: Platform
  ) {}

  clickMe() {
    this.platform.ready().then(() => {
      this.deviceMotion
        .watchAcceleration({ frequency: 200 })
        .subscribe((acc: DeviceMotionAccelerationData) => {
          this.x = acc.x;
          this.y = acc.y;
          this.z = acc.z;
          console.log(acc);
        });
    });
  }
}

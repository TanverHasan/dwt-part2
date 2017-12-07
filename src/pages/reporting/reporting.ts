import { Component } from "@angular/core";
import { NavController, NavParams, ToastController } from "ionic-angular";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ListPage } from "../list/list";
import {
  DataService,
  IReporting,
  ILocation
} from "../../providers/shared/shared";
import { Geolocation } from "@ionic-native/geolocation";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { Platform } from "ionic-angular/platform/platform";

@Component({
  selector: "page-reporting",
  templateUrl: "reporting.html"
})
export class ReportingPage {
  imgSrc: any;
  currentLocation: ILocation;
  Returned: any;
  form: FormGroup;
  data: IReporting;
  listOfItem: Array<IReporting> = [];
  images: Array<{ src: String }>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private st: DataService,
    private fb: FormBuilder,
    private toastCtrl: ToastController,
    private geolocation: Geolocation,
    private camera: Camera,
    private platform: Platform
  ) {
    this.images = [];
    this.form = this.fb.group({
      name: [""],
      description: [""],
      time: [""],
      date: [""],
      imgSrcs: [""],
      hotItem: [""],
      location: this.fb.group({
        lat: [""],
        lon: [""]
      })
    });

    this.form.patchValue({
      hotItem: true
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ReportingPage");
  }

  save() {
    let toast = this.toastCtrl.create({
      message: "Item was added successfully",
      duration: 8000,
      position: "middle"
    });
    toast.present().then(() => {
      if (this.currentLocation != null) {
        console.log(this.currentLocation);
        this.form.patchValue({
          location: this.currentLocation
        });
      }

      if (this.images != null) {
        this.form.patchValue({
          imgSrcs: this.images
        });
      }

      this.data = Object.assign({}, this.form.value);
      this.data.id = this.st.generateId();
      console.log(this.form.value);
      this.st.saveData(this.data);
      this.form.reset();
      this.images = [];
      toast.dismiss();
      this.navCtrl.push(ListPage);
    });
  }

  click() {
    this.st.getAllItems();
  }

  GetGeoLocation() {
    this.platform.ready().then(() => {
      this.geolocation
        .getCurrentPosition()
        .then(resp => {
          this.currentLocation = {
            lat: resp.coords.latitude,
            lon: resp.coords.longitude
          };
        })
        .catch(error => {
          console.log("Error getting location", error);
        });
    });
  }

  takePhoto() {
    this.platform.ready().then(() => {
      const options: CameraOptions = {
        quality: 80,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.CAMERA,
        allowEdit: false,
        encodingType: this.camera.EncodingType.JPEG,
        saveToPhotoAlbum: true
      };
      this.camera.getPicture(options).then(
        imageData => {
          // imageData is either a base64 encoded string or a file URI
          // If it's base64:
          let base64Image = "data:image/jpeg;base64," + imageData;
          this.images.unshift({
            src: base64Image
          });
        },
        err => {
          console.log("Error getting picture");
        }
      );
    });
  }
}

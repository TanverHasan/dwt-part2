import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { IReporting, DataService } from "../../providers/shared/shared";
import { ListPage } from "../list/list";
//import * as _ from 'lodash';

@Component({
  selector: "page-reporting-details",
  templateUrl: "reporting-details.html"
})
export class ReportingDetailsPage {
  item: IReporting;
  isAlert = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private st : DataService
  ) {
    this.item = this.navParams.data;
    console.log(this.item.date);

    this.st.getItemById(this.item.id).then(val=>{
      if(val.hotItem==true){
        this.isAlert=true;
      }
    });
  }

  ionViewLoaded() {

  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad ReportingDetailsPage");
  }
  addAlert() {
    this.isAlert = true;
    this.item.hotItem=true;
    this.st.addToAlert(this.item,this.item.id);
  }
  remove(){
    this.st.removeItem(this.item.id).then(val=>{
      if(val==true){
      this.navCtrl.push(ListPage);
      }
    })
  }
  GetAlertedItem(){

  }
}

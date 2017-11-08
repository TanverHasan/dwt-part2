import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ListPage } from "../list/list";
import { DataService, IReporting } from "../../providers/shared/shared";

@Component({
  selector: "page-reporting",
  templateUrl: "reporting.html"
})
export class ReportingPage {
  Returned: any;
  form: FormGroup;
  data: IReporting;
  listOfItem: Array<IReporting> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private st: DataService,
    private fb: FormBuilder
  ) {
    this.st.getData().then(val => {
      if (val != null) {
        console.log("checking value " + val);
        this.listOfItem = val;
        console.log(this.listOfItem);
      }
    });

    this.form = this.fb.group({
      name: [""],
      description: [""],
      time: [""],
      date: [""],
      picture: [""]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ReportingPage");
  }

  save() {
    this.data = Object.assign({}, this.form.value);
    // this.st.saveData(this.form.value);
    this.listOfItem.push(this.data);
    // console.log(this.listOfItem);
    this.st.saveData(this.listOfItem);
    this.form.reset();

    // this.storage.get("reportingitem").then(val => {
    //   console.log("value after insert" + val);
    //  // this.Returned = val;
    //   //console.log(this.Returned.length);
    this.navCtrl.push(ListPage);
    // });
  }
}

// export interface ISiteReporting {
//   name: string;
//   description: string;
//   time: string;
//   date: string;
//   picture: string;
// }

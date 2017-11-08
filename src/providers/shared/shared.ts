import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Storage } from "@ionic/storage";

/*
  Generated class for the SharedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataService {

  storageName: string = "reportingitem";
  Reporting: IReporting;
  Data: any[] = [];
  constructor(private storage: Storage) {
    this.getData();
  }

  getData() {
    return this.storage.get(this.storageName).then(val => {
      this.Data = val;
      return this.Data;
    });
  }
  saveData(ob: any) {
    // if (ob != null) {
    //   console.log(ob);
    //   const insertItem=Object.assign({},this.Reporting , ob);
    //   this.Data.push(insertItem);
    //   console.log(" data array" +this.Data);
    //
    // }
    this.storage.set(this.storageName, ob);
   // console.log("Object is null");
  }

  clearSotrage() {
    this.storage.clear();
    this.Data = [];
  }
}
export interface IReporting {
  name: string;
  description: string;
  time: string;
  date: string;
  picture: string;
}

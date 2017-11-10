import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Storage } from "@ionic/storage";
import * as _ from "lodash";
/*
  Generated class for the SharedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataService {
  items: Array<IReporting> = [];

  constructor(private storage: Storage) {}

  saveData(ob: IReporting) {
    this.storage.set(ob.id, ob);
  }
  getAllItems() {
    this.items=[];
   return  this.storage.forEach((v, k) => {
      this.items.push(v);
    }).then(()=>{
      return this.items;
    });

  }


  getItemById(id): Promise<IReporting> {
    return this.storage.get(id).then(val => {
      return val as IReporting;
    });
  }

  addToAlert(item: IReporting, id) {
    this.storage.set(id, item);
  }
  removeItem(id) {
    return this.storage.remove(id).then(() => {
      return true;
    });
  }

  // getHotItems() {
  //   this.getAllItems().filter()
  // }

  clearSotrage() {
    this.storage.clear();
  }

  generateId() {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  }
}
export interface IReporting {
  id: string;
  name: string;
  description: string;
  time: string;
  date: string;
  picture: string;
  hotItem: boolean;
  url: string;
  location: ILocation
}

export interface ILocation{
  lat: number,
  lon: number
}

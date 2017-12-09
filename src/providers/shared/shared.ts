import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Storage } from "@ionic/storage";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
// import * as _ from "lodash";

@Injectable()
export class DataService {
  itemDoc: AngularFirestoreDocument<IReporting>;
  collection: AngularFirestoreCollection<IReporting>;
  items: Array<IReporting> = [];

  constructor(private storage: Storage, private afs: AngularFirestore) {}

  saveData(ob: IReporting) {
    this.storage.set(ob.id, ob);
  }

  getAllItems() {
    this.items = [];
    return this.storage
      .forEach((v, k) => {
        this.items.push(v);
      })
      .then(() => {
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
  getAllFromCloud() {
    this.collection = this.afs.collection<IReporting>("reporting");
    return this.collection.snapshotChanges().map(actions => {
      return actions.map(i => {
        const data = i.payload.doc.data() as IReporting;
        const id = i.payload.doc.id;
        return { id, data };
      });
    });
  }
  getFromCloudById(id) {
    this.itemDoc = this.afs.doc<IReporting>("reporting" + "/" + id);
    return this.itemDoc.snapshotChanges().map(actions => {
      const data = actions.payload.data() as IReporting;
      return data;
    });
  }
  removeFromCloud(id) {
    this.afs.doc("reporting/"+id).delete();
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
  imgSrcs: any[];
  hotItem: boolean;
  location: ILocation;
}

export interface ILocation {
  lat: number;
  lon: number;
}

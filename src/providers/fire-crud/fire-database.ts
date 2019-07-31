import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
// @ts-ignore
import {Item} from './item';

@Injectable()

export class FireDatabaseProvider {
    private dbPath = '/items';
    itemsRef: AngularFireList<Item> = null;

    constructor(db: AngularFireDatabase) {
        this.itemsRef = db.list(this.dbPath);
    }

    getItemsList(): AngularFireList<Item> {
        return this.itemsRef;
    }

}

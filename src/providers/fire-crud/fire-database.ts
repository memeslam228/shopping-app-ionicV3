import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
// @ts-ignore
import {Item} from './item';
import {FirebaseListObservable} from "@angular/fire/database-deprecated";

@Injectable()

export class FireDatabaseProvider {
    private dbPath = '/items';
    itemsRef: AngularFireList<Item> = null;

    constructor(private db: AngularFireDatabase) {
        this.itemsRef = db.list(this.dbPath);

        this.itemsRef.valueChanges().subscribe(x => console.log(x));
    }

    getItemsList(): AngularFireList<Item> {
        return this.itemsRef;
    }

}

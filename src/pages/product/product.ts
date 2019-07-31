import {Component} from '@angular/core';
import {map} from "rxjs/operators";
// @ts-ignore
import {Item} from "../../providers/fire-crud/item";
import {FireDatabaseProvider} from "../../providers/fire-crud/fire-database";


@Component({
    selector: 'page-product',
    templateUrl: 'product.html',
})
export class ProductPage {
    items: Item[];

    constructor(public db: FireDatabaseProvider) {
    }

    getItemsList() {
        // Use snapshotChanges().map() to store the key
        this.db.getItemsList().snapshotChanges().pipe(
            map(changes =>
                changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
            )
        ).subscribe(items => {
            this.items = items;
        });
    }


    ionViewDidLoad() {
        this.getItemsList();
    }

}

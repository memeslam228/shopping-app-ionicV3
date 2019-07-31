import {Component} from '@angular/core';
import {map} from "rxjs/operators";
// @ts-ignore
import {Item} from "../../providers/fire-crud/item";
import {FireDatabaseProvider} from "../../providers/fire-crud/fire-database";
import {Loading, LoadingController} from "ionic-angular";


@Component({
    selector: 'page-product',
    templateUrl: 'product.html',
})
export class ProductPage {
    items: Item[];
    loader : Loading = null;

    constructor(public db: FireDatabaseProvider,
                public loadingCtrl: LoadingController) {
    }

    getItemsList() {
        // Use snapshotChanges().map() to store the key
        this.db.getItemsList().snapshotChanges().pipe(
            map(changes =>
                changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
            )
        ).subscribe(items => {
            this.items = items;
            this.loader.dismiss();
        });
    }

    presentLoading() {
        this.loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.loader.present();
    }


    ionViewDidLoad() {
        this.presentLoading();
        this.getItemsList();
    }

}

import {Component} from '@angular/core';
import {map} from "rxjs/operators";

import {Item} from "../../providers/fire-crud/item";
import {FireDatabaseProvider} from "../../providers/fire-crud/fire-database";
import {ActionSheetController, Loading, LoadingController} from "ionic-angular";
import {SortPipe} from "../../pipes/sort/sort";


@Component({
    selector: 'page-product',
    templateUrl: 'product.html',
})
export class ProductPage {
    items: Item[];
    nonFilteredItems: Item[];
    loader: Loading = null;
    searchQuery: string = '';

    constructor(public db: FireDatabaseProvider,
                public loadingCtrl: LoadingController,
                private actionSheetCtrl: ActionSheetController) {
    }

    getItemsList() {
        // Use snapshotChanges().map() to store the key
        this.db.getItemsList().snapshotChanges().pipe(
            map(changes =>
                changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
            )
        ).subscribe(items => {
            this.items = items;
            this.nonFilteredItems = items;
            this.loader.dismiss();
        });
    }

    presentActionSheet() {
        const actionSheet = this.actionSheetCtrl.create({
            title: 'Items sorting type',
            buttons: [
                {
                    text: 'From A to Z',
                    handler: () => {
                        this.items = SortPipe.subSelected(this.items, 'A-Z');
                    }
                }, {
                    text: 'From Z to A',
                    handler: () => {
                        this.items = SortPipe.subSelected(this.items, 'Z-A');
                    }
                }, {
                    text: 'From Expansive to Cheap',
                    handler: () => {
                        this.items = SortPipe.subSelected(this.items, 'fromEtoC');
                    }
                }, {
                    text: 'From Cheap to Expansive',
                    handler: () => {
                        this.items = SortPipe.subSelected(this.items, 'fromCtoE');
                    }
                }, {
                    text: 'Close',
                    icon: 'close',
                    role: 'cancel',
                    handler: () => {
                    }
                }
            ]
        });
        actionSheet.present();
    }

    getItems(ev: any) {
        const val = ev.target.value;

        if (val && val.trim() != '') {
            this.items = this.nonFilteredItems.filter((item) => {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        } else this.items = this.nonFilteredItems;

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

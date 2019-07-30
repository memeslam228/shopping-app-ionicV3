import {Component} from '@angular/core';
import {PopoverController} from "ionic-angular";
import {PopoverUserComponent} from "../../components/popover-user/popover-user";
// @ts-ignore
import {Item} from "../../providers/fire-crud/item";
import {FireDatabaseProvider} from "../../providers/fire-crud/fire-database";
import {map} from "rxjs/operators";

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-product',
    templateUrl: 'product.html',
})
export class ProductPage {
    items: Item[];

    constructor(public popover: PopoverController, public db: FireDatabaseProvider) {
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

    presentPopover(event) {
        const popover = this.popover.create(PopoverUserComponent);
        popover.present({
            ev: event
        });
    }

    ionViewDidLoad() {
        this.getItemsList();
    }

}

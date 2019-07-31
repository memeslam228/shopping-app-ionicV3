import {Component, Input} from '@angular/core';
import {NavController} from "ionic-angular";

import {Item} from "../../providers/fire-crud/item";
import {ItemDetailsPage} from "../../pages/item-details/item-details";


@Component({
    selector: 'product-item',
    templateUrl: 'product-item.html'
})
export class ProductItemComponent {
    constructor(private navCtrl: NavController) {

    }

    openPage() {
        this.navCtrl.push(ItemDetailsPage, {
            item: this.item
        });
    }

    @Input()
    item: Item;



}

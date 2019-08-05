import {Component, Input} from '@angular/core';
import {NavController} from "ionic-angular";

import {ItemDetailsPage} from "../../pages/product-details/item-details";
import {Item} from "../../providers/fire-crud/item";

@Component({
    selector: 'favouite-item',
    templateUrl: 'favourite-item.html'
})
export class FavouriteItemComponent {


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

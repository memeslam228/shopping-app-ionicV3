import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';

import {Item} from "../../providers/fire-crud/item";

@Component({
    selector: 'page-item-details',
    templateUrl: 'item-details.html',
})
export class ItemDetailsPage {
    item: Item;

    constructor(public navParams: NavParams) {
        this.item = navParams.get('item');
    }

    addToCart() {

    }

    addToFavourite() {

    }

}

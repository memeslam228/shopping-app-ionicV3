import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';

import {Item} from "../../providers/fire-crud/item";
import {FavouriteProvider} from "../../providers/favourite/favourite";

@Component({
    selector: 'page-item-details',
    templateUrl: 'item-details.html',
})
export class ItemDetailsPage {
    item: Item;

    constructor(public navParams: NavParams, private favourite: FavouriteProvider) {
        this.item = navParams.get('item');
    }

    addToCart() {

    }

    addToFavourite() {
        this.favourite.addToFavourite(this.item);
    }

}

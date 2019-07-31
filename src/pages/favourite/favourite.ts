import {Component} from '@angular/core';

import {FavouriteProvider} from "../../providers/favourite/favourite";
import {Item} from "../../providers/fire-crud/item";

@Component({
    selector: 'page-favourite',
    templateUrl: 'favourite.html',
})

export class FavouritePage {
    items: Item[];

    constructor(private favourite: FavouriteProvider) {
        this.items = favourite.getItems();
    }

    ionViewDidLoad() {
        this.items = this.favourite.getItems();
    }


}

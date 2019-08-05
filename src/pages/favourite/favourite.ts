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
        let smth = favourite.getItems();
        if (smth[0] != null) {
            this.items = favourite.getItems();
        }
    }

    ionViewWillEnter() {
        let smth = this.favourite.getItems();
        if (smth[0] != null) {
            this.items = this.favourite.getItems();
        }
    }


}

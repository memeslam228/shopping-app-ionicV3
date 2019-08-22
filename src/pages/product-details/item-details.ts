import {Component} from '@angular/core';

import {ModalController, NavParams} from 'ionic-angular';

import {AddToCartComponent} from "../../components/add-to-cart/add-to-cart";

import {Item} from "../../providers/fire-crud/item";
import {FavouriteProvider} from "../../providers/favourite/favourite";

@Component({
    selector: 'page-item-details',
    templateUrl: 'item-details.html',
})
export class ItemDetailsPage {
    item: Item;

    constructor(public navParams: NavParams,
                private favourite: FavouriteProvider,
                public modalCtrl: ModalController) {
        this.item = navParams.get('item');
    }

    private presentProfileModal() {
        let modal = this.modalCtrl.create(AddToCartComponent, { ItemKey: this.item.key });
        modal.present();
    }

    addToCart() {
        this.presentProfileModal();
    }

    addToFavourite() {
        this.favourite.addToFavourite(this.item);
    }

}

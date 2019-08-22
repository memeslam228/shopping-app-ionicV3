import {Component} from '@angular/core';

import {ModalController, NavParams, ViewController} from 'ionic-angular';

import {AddToCartComponent} from "../../components/add-to-cart/add-to-cart";

import {Item} from "../../providers/fire-crud/item";
import {FavouriteProvider} from "../../providers/favourite/favourite";

@Component({
    selector: 'page-product-details-favourite',
    templateUrl: 'product-details-favourite.html',
})

export class ProductDetailsFavouritePage {
    item: Item;

    constructor(public navParams: NavParams,
                private favourite: FavouriteProvider,
                public modalCtrl: ModalController,
                public viewCtrl: ViewController) {
        this.item = navParams.get('item');
    }

    deleteItem() {
        this.favourite.deleteFromFavourite(this.item);
        this.viewCtrl.dismiss();
    }

    private presentProfileModal() {
        let modal = this.modalCtrl.create(AddToCartComponent, {ItemKey: this.item.key});
        modal.present();
    }

    addToCart() {
        this.presentProfileModal();
    }
}

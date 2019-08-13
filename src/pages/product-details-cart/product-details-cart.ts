import {Component} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';

import {Item} from "../../providers/fire-crud/item";
import {CartProvider} from "../../providers/cart/cart";

@Component({
    selector: 'page-product-details-cart',
    templateUrl: 'product-details-cart.html',
})
export class ProductDetailsCartPage {
    item: Item;

    constructor(public navParams: NavParams,
                private cart: CartProvider,
                public viewCtrl: ViewController) {
        this.item = navParams.get('item');
    }

    deleteItem() {
        this.cart.deleteItem(this.item.key);
        this.viewCtrl.dismiss();
    }
}

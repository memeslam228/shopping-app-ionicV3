import {Component} from '@angular/core';

import {CartProvider} from "../../providers/cart/cart";

@Component({
    selector: 'page-cart',
    templateUrl: 'cart.html',
})

export class CartPage {

    constructor(private cart: CartProvider) {}

    isItems(): boolean {
        if (this.cart.items) {
            return this.cart.items[0] != null;
        } else return false;
    }


    clearAllCart() {
        this.cart.deleteAll();
    }


}

import {Component} from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";

import {CartProvider} from "../../providers/cart/cart";

@Component({
    selector: 'add-to-cart',
    templateUrl: 'add-to-cart.html'
})

export class AddToCartComponent {
    number = 1;

    constructor(public viewCtrl: ViewController,
                private cart: CartProvider,
                private params: NavParams) {
    }

    close() {
        this.viewCtrl.dismiss();
    }

    incNumber() {
        this.number++;
    }

    decNumber() {
        if (this.number != 1) {
            this.number--;
        }
    }

    numbChange() {
        if (this.number < 1) {
            this.number = 1;
        }
    }

    addToCart() {
        let key = this.params.get('ItemKey');
        let keyNumb: string = key + '|' + this.number;
        this.cart.addToCard(keyNumb);
        this.viewCtrl.dismiss();
    }

}

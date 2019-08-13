import {Component, Input} from '@angular/core';
import {ActionSheetController, NavController} from "ionic-angular";

import {Item} from "../../providers/fire-crud/item";
import {CartProvider} from "../../providers/cart/cart";
import {ProductDetailsCartPage} from "../../pages/product-details-cart/product-details-cart";

@Component({
    selector: 'cart-item',
    templateUrl: 'cart-item.html'
})
export class CartItemComponent {

    constructor(private navCtrl: NavController,
                private actionSheetCtrl: ActionSheetController,
                private cart: CartProvider) {
    }

    @Input()
    item: Item;


    presentActionSheet() {
        const actionSheet = this.actionSheetCtrl.create({
            title: 'Item actions',
            buttons: [
                {
                    text: 'Open details',
                    icon: 'search',
                    handler: () => {
                        this.openPage();
                    }
                }, {
                    text: 'Delete this item',
                    icon: 'trash',
                    handler: () => {
                        this.cart.deleteItem(this.item.key);
                    }
                }, {
                    text: 'Close',
                    icon: 'close',
                    role: 'cancel',
                    handler: () => {
                    }
                }
            ]
        });
        actionSheet.present();
    }

    openPage() {
        this.navCtrl.push(ProductDetailsCartPage, {
            item: this.item
        });
    }

}

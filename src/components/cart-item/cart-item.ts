import {Component, Input} from '@angular/core';
import {ActionSheetController, NavController} from "ionic-angular";

import {Item} from "../../providers/fire-crud/item";
import {ItemDetailsPage} from "../../pages/product-details/item-details";
import {CartProvider} from "../../providers/cart/cart";

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
                },{
                    text: 'Delete this item',
                    icon: 'trash',
                    handler: () => {
                        this.cart.deleteItem(this.item.key);
                    }
                },{
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
        this.navCtrl.push(ItemDetailsPage, {
            item: this.item
        });
    }

}

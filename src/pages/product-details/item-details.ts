import {Component} from '@angular/core';
import {Alert, AlertController, NavParams} from 'ionic-angular';

import {Item} from "../../providers/fire-crud/item";
import {FavouriteProvider} from "../../providers/favourite/favourite";
import {CartProvider} from "../../providers/cart/cart";

@Component({
    selector: 'page-item-details',
    templateUrl: 'item-details.html',
})
export class ItemDetailsPage {
    item: Item;
    private alert: Alert = null;

    constructor(public navParams: NavParams,
                private favourite: FavouriteProvider,
                private alertCtrl: AlertController,
                private cart: CartProvider) {
        this.item = navParams.get('item');
    }

    alertConstructor() {
        this.alert = this.alertCtrl.create();
        this.alert.setTitle('Item actions');

        this.alert.addInput({
            type: 'radio',
            label: '1 item',
            value: '1',
            checked: true
        });
        this.alert.addInput({
            type: 'radio',
            label: '2 items',
            value: '2'
        });
        this.alert.addInput({
            type: 'radio',
            label: '3 items',
            value: '3'
        });

        this.alert.addButton('Cancel');
        this.alert.addButton({
            text: 'OK',
            handler: data => {
                let keyNumb: string = this.item.key + '|' + data ;
                this.cart.addToCard(keyNumb);
                const boolKey = this.item.key.split('|');
                this.item.key = boolKey[0];
            }
        });
    }

    addToCart() {
        this.alertConstructor();
        this.alert.present().then(this.alert = null);
    }

    addToFavourite() {
        this.favourite.addToFavourite(this.item);
    }

}

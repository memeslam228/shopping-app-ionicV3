import {Component, Input} from '@angular/core';
import {ActionSheetController, Alert, AlertController, NavController} from "ionic-angular";

import {Item} from "../../providers/fire-crud/item";
import {ItemDetailsPage} from "../../pages/product-details/item-details";
import {FavouriteProvider} from "../../providers/favourite/favourite";


@Component({
    selector: 'product-item',
    templateUrl: 'product-item.html'
})
export class ProductItemComponent {

    constructor(private navCtrl: NavController,
                private actionSheetCtrl: ActionSheetController,
                private favourite: FavouriteProvider,
                private alertCtrl: AlertController) {}

    @Input()
    item: Item;

    private alert: Alert = null;

    alertConstructor() {
        this.alert = this.alertCtrl.create();
        this.alert.setTitle('Lightsaber color');

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
            }
        });
    }

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
                    text: 'Add to cart',
                    icon: 'cart',
                    handler: () => {
                        this.alertConstructor();
                        this.alert.present().then(this.alert = null);
                    }
                },{
                    text: 'Add to favourite',
                    icon: 'star',
                    handler: () => {
                        this.favourite.addToFavourite(this.item);
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

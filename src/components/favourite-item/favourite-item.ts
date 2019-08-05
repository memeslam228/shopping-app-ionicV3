import {Component, Input} from '@angular/core';
import {ActionSheetController, Alert, AlertController, NavController} from "ionic-angular";

import {ItemDetailsPage} from "../../pages/product-details/item-details";
import {Item} from "../../providers/fire-crud/item";
import {FavouriteProvider} from "../../providers/favourite/favourite";

@Component({
    selector: 'favourite-item',
    templateUrl: 'favourite-item.html'
})
export class FavouriteItemComponent {

    private alert: Alert = null;

    constructor(private navCtrl: NavController,
                private actionSheetCtrl: ActionSheetController,
                private favourite: FavouriteProvider,
                private alertCtrl: AlertController) {}

    @Input()
    item: Item;


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
                    text: 'Delete this item',
                    icon: 'trash',
                    handler: () => {
                        this.favourite.deleteFromFavourite(this.item);
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

import {Component, Input} from '@angular/core';
import {ActionSheetController, NavController} from "ionic-angular";

import {ItemDetailsPage} from "../../pages/product-details/item-details";
import {Item} from "../../providers/fire-crud/item";
import {FavouriteProvider} from "../../providers/favourite/favourite";

@Component({
    selector: 'favourite-item',
    templateUrl: 'favourite-item.html'
})
export class FavouriteItemComponent {


    constructor(private navCtrl: NavController,
                private actionSheetCtrl: ActionSheetController,
                private favourite: FavouriteProvider) {}

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
                    text: 'Add to cart',
                    icon: 'cart',
                    handler: () => {
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

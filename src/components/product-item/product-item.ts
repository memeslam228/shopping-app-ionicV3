import {Component, Input} from '@angular/core';
import {ActionSheetController, ModalController, NavController} from "ionic-angular";

import {ItemDetailsPage} from "../../pages/product-details/item-details";

import {Item} from "../../providers/fire-crud/item";
import {FavouriteProvider} from "../../providers/favourite/favourite";
import {AddToCartComponent} from "../add-to-cart/add-to-cart";


@Component({
    selector: 'product-item',
    templateUrl: 'product-item.html'
})
export class ProductItemComponent {

    constructor(private navCtrl: NavController,
                private actionSheetCtrl: ActionSheetController,
                private favourite: FavouriteProvider,
                public modalCtrl: ModalController) {
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
                    text: 'Add to cart',
                    icon: 'cart',
                    handler: () => {
                        this.presentProfileModal();
                    }
                }, {
                    text: 'Add to favourite',
                    icon: 'star',
                    handler: () => {
                        this.favourite.addToFavourite(this.item);
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
        this.navCtrl.push(ItemDetailsPage, {
            item: this.item
        });
    }

    private presentProfileModal() {
        let modal = this.modalCtrl.create(AddToCartComponent, {ItemKey: this.item.key});
        modal.present();
    }

}

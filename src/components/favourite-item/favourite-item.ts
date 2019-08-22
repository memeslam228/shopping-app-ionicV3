import {Component, Input} from '@angular/core';

import {ActionSheetController, ModalController, NavController} from "ionic-angular";

import {ProductDetailsFavouritePage} from "../../pages/product-details-favourite/product-details-favourite";
import {AddToCartComponent} from "../add-to-cart/add-to-cart";

import {Item} from "../../providers/fire-crud/item";
import {FavouriteProvider} from "../../providers/favourite/favourite";

@Component({
    selector: 'favourite-item',
    templateUrl: 'favourite-item.html'
})
export class FavouriteItemComponent {

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
                    text: 'Delete this item',
                    icon: 'trash',
                    handler: () => {
                        this.favourite.deleteFromFavourite(this.item);
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

    private presentProfileModal() {
        let modal = this.modalCtrl.create(AddToCartComponent, {ItemKey: this.item.key});
        modal.present();
    }

    openPage() {
        this.navCtrl.push(ProductDetailsFavouritePage, {
            item: this.item
        });
    }

}

import {Injectable} from '@angular/core';
import {ToastController} from "ionic-angular";

import {Item} from "../fire-crud/item";

@Injectable()

export class FavouriteProvider {
    itemsCount = 0;
    items: Item[] = [null];
    bool: boolean;

    constructor(private toastCtrl: ToastController) {
        this.updateItems();
        this.countFavourite();
    }

    getItems() {
        return this.items;
    }

    addToFavourite(item: Item) {
        this.bool = false;
        if (this.items[0] == null) {
            this.items[0] = item;
            this.toastSuccess();
        } else {
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].name === item.name) {
                    this.bool = true;
                }
            }
            if (this.bool) {
                this.toastProblem();
            } else {
                this.items.push(item);
                this.toastSuccess();
            }
        }
        localStorage.setItem('favourite-items', JSON.stringify(this.items));
        this.countFavourite();
    }

    deleteFromFavourite(item: Item) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name === item.name) {
                this.items.splice(i, 1);
                this.toastDeleted();
            }
        }
        if (!this.items[0]) {
            this.items[0] = null;
        }
        localStorage.setItem('favourite-items', JSON.stringify(this.items));
        this.countFavourite();
    }

    updateItems() {
        if (JSON.parse(localStorage.getItem('favourite-items'))) {
            this.items = JSON.parse(localStorage.getItem('favourite-items'));
        } else {
            this.items = [null];
            this.itemsCount = 0;
        }
    }

    countFavourite() {
        const array = JSON.parse(localStorage.getItem('favourite-items'));
        if (array != null) {
            this.itemsCount = array.length;
        }
    }

    private toastSuccess() {
        const toast = this.toastCtrl.create({
            message: 'Item was added to favourite',
            duration: 1500,
            position: 'top',
            cssClass: 'toast-success',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    }

    private toastProblem() {
        const toast = this.toastCtrl.create({
            message: 'This item was added before',
            duration: 1500,
            position: 'top',
            cssClass: 'toast-alert',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    }

    private toastDeleted() {
        const toast = this.toastCtrl.create({
            message: 'This item was successfully deleted',
            duration: 1500,
            position: 'top',
            cssClass: 'toast-info',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    }

}

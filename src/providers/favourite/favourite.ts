import {Injectable} from '@angular/core';

import {Item} from "../fire-crud/item";
import {ToastProvider} from "../toast/toast";

@Injectable()

export class FavouriteProvider {
    itemsCount = 0;
    items: Item[] = [null];

    constructor(private toast: ToastProvider) {
        this.updateItems();
        this.countFavourite();
    }

    getItems() {
        return this.items;
    }

    clearAllFavourite() {
        this.items = [null];
        localStorage.setItem('favourite-items', JSON.stringify(this.items));
        this.countFavourite();
        this.toast.toastAllDeleted();
    }

    addToFavourite(item: Item) {
        let bool = false;
        if (this.items[0] == null) {
            this.items[0] = item;
            this.toast.toastSuccess('fav');
        } else {
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].name === item.name) {
                    bool = true;
                }
            }
            if (bool) {
                this.toast.toastProblem();
            } else {
                this.items.push(item);
                this.toast.toastSuccess('fav');
            }
        }
        localStorage.setItem('favourite-items', JSON.stringify(this.items));
        this.countFavourite();
    }

    deleteFromFavourite(item: Item) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name === item.name) {
                this.items.splice(i, 1);
                this.toast.toastDeleted();
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
            if (array[0] == null) {
                this.itemsCount = 0;
            } else {
                this.itemsCount = array.length;
            }
        }
    }


}

import {Injectable} from '@angular/core';

import {Item} from "../fire-crud/item";
import {ToastProvider} from "../toast/toast";
import {CartArray} from "./cart-array";
import {map} from "rxjs/operators";
import {AngularFireDatabase, AngularFireList, AngularFireObject} from "@angular/fire/database";

@Injectable()

export class CartProvider {
    itemsCount = 0;
    private dbPath: string;
    idArray: string[] = [null];
    dbObject: AngularFireObject<CartArray> = null;
    cartarray: CartArray = new CartArray();
    itemsRef: AngularFireList<Item> = null;
    items: Item[] = [null];

    constructor(private toast: ToastProvider,
                private db: AngularFireDatabase) {
    }

    setPath(uId: any) {
        this.dbPath = '/users/' + uId;
        this.dbObject = this.db.object(this.dbPath);
        this.itemsRef = this.db.list('/items');
    }

    updateId() {
        this.dbObject.valueChanges().subscribe(c => {
            if (c != null) {
                this.idArray = JSON.parse(c.cart);
                this.getItemsList();
            }
        });
    }

    getItemsList() {
        // Use snapshotChanges().map() to store the key
        this.itemsRef.snapshotChanges().pipe(
            map(changes =>
                changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
            )
        ).subscribe(items => {
            if (this.idArray[0] == null) return this.items; else {
                this.items = [null];
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < items.length; i++) {
                    // tslint:disable-next-line:prefer-for-of
                    for (let k = 0; k < this.idArray.length; k++) {
                        const dbArray = this.idArray[k].split('|');
                        if (items[i].key === dbArray[0]) {
                            if (this.items[0] === null) {
                                this.items[0] = items[i];
                                this.items[0].number = dbArray[1];
                            } else {
                                items[i].number = dbArray[1];
                                this.items.push(items[i]);
                            }
                        }
                    }
                }
            }
            this.cartCount(this.idArray);
        });
    }

    addToCard(id: string){
        let bool = false;
        if (this.idArray[0] == null) {
            this.idArray[0] = id;
            this.cartarray.cart = JSON.stringify(this.idArray);
            this.dbObject.set(this.cartarray);
            this.cartCount(this.idArray);
            this.toast.toastSuccess('cart');
        } else {
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < this.idArray.length; i++) {
                const key = id.split('|');
                const arrKey = this.idArray[i].split('|');
                if (arrKey[0] === key[0]) {
                    const newNumber: number = parseInt(arrKey[1], 10) + parseInt(key[1], 10);
                    this.idArray[i] = key[0] + '|' + newNumber;
                    this.cartarray.cart = JSON.stringify(this.idArray);
                    this.dbObject.update({cart: this.cartarray.cart});
                    bool = true;
                }
            }
            if (bool === true) {
                this.cartCount(this.idArray);
                this.toast.toastUpdate();
            } else {
                this.idArray.push(id);
                this.cartarray.cart = JSON.stringify(this.idArray);
                this.dbObject.update({cart: this.cartarray.cart});
                this.cartCount(this.idArray);
                this.toast.toastSuccess('cart');
            }
        }
    }

    deleteAll() {
        this.idArray = [null];
        this.items = [null];
        this.itemsCount = 0;
        this.dbObject.remove();
        this.toast.toastAllDeleted();
    }

    deleteItem(id: string) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].key === id) {
                this.items.splice(i, 1);
            }
        }
        if (!this.items[0]) {
            this.items = [null];
        }
        for (let i = 0; i < this.idArray.length; i++) {
            const key = this.idArray[i].split('|');
            if (key[0] === id) {
                this.idArray.splice(i, 1);
                if (this.idArray[0]) {
                    this.cartarray.cart = JSON.stringify(this.idArray);
                    this.dbObject.update({cart: this.cartarray.cart});
                } else {
                    this.dbObject.remove();
                    this.idArray = [null];
                }
            }
        }
        this.cartCount(this.idArray);
        this.toast.toastDeleted();
    }

    private cartCount(idArray: string[]) {
        this.itemsCount = 0;
        if (idArray[0] != null) {
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < idArray.length; i++) {
                const arr = idArray[i].split('|');
                this.itemsCount += parseInt(arr[1], 10);
            }
        }
    }

}

import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import * as firebase from 'firebase/app';
import {FavouriteProvider} from "../favourite/favourite";
import {CartProvider} from "../cart/cart";

@Injectable()
export class AuthProvider {

    private user: firebase.User;
    username: string = null;

    constructor(public afAuth: AngularFireAuth,
                private fav: FavouriteProvider,
                private cart: CartProvider) {
        afAuth.authState.subscribe(user => {
            if (user) {
                this.user = user;
                this.setName();
                localStorage.setItem('user', JSON.stringify(this.user));
            } else {
                localStorage.setItem('user', null);
            }
        });
    }

    getUid() {
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user != null) {
            return this.user.uid;
        }
    }

    signInWithEmail(credentials) {
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
            credentials.password).then(() => {
            localStorage.setItem('user', JSON.stringify(this.afAuth.auth.currentUser));
            this.setName();
            this.fav.countFavourite();
            this.cart.setPath(this.getUid());
            this.cart.updateId();
        });
    }

    signUp(credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password).then(() => {
            localStorage.setItem('user', JSON.stringify(this.afAuth.auth.currentUser));
            this.setName();
            this.fav.countFavourite();
            this.cart.setPath(this.getUid());
            this.cart.updateId();
        });
    }

    logOut(): Promise<void> {
        localStorage.setItem('user', null);
        this.cart.itemsCount = 0;
        this.cart.items = [null];
        return this.afAuth.auth.signOut();
    }

    getEmail() {
        this.user = JSON.parse(localStorage.getItem('user'));
        return this.user && this.user.email;
    }

    setName() {
        let email = this.getEmail();
        let nameBoof = email.split('@');
        this.username = nameBoof[0];
    }

}

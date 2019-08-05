import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import * as firebase from 'firebase/app';
import {FavouriteProvider} from "../favourite/favourite";

@Injectable()
export class AuthProvider {

    private user: firebase.User;
    username: string = null;

    constructor(public afAuth: AngularFireAuth, private fav: FavouriteProvider) {
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

    signInWithEmail(credentials) {
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
            credentials.password).then(() => {
            localStorage.setItem('user', JSON.stringify(this.afAuth.auth.currentUser));
            this.setName();
            this.fav.countFavourite();
        });
    }

    signUp(credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password).then(() => {
            localStorage.setItem('user', JSON.stringify(this.afAuth.auth.currentUser));
            this.setName();
            this.fav.countFavourite();
        });
    }

    logOut(): Promise<void> {
        localStorage.setItem('user', null);
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

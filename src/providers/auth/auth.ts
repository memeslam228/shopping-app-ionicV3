import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import * as firebase from 'firebase/app';

@Injectable()
export class AuthProvider {

    private user: firebase.User;

    constructor(public afAuth: AngularFireAuth) {
        afAuth.authState.subscribe(user => {
            this.user = user;
        });
    }

    signInWithEmail(credentials) {
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
            credentials.password);
    }

    signUp(credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    }

    logOut(): Promise<void> {
        return this.afAuth.auth.signOut();
    }

    getEmail() {
        return this.user && this.user.email;
    }

}

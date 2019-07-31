import {Component} from '@angular/core';
import {Loading, LoadingController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {SignInPage} from "../pages/sign-in/sign-in";
import {AuthProvider} from "../providers/auth/auth";
import {TabsPage} from "../pages/tabs/tabs";


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = SignInPage;
    loader : Loading = null;

    constructor(platform: Platform,
                statusBar: StatusBar,
                splashScreen: SplashScreen,
                private auth: AuthProvider,
                public loadingCtrl: LoadingController) {
        platform.ready().then(() => {
            this.presentLoading();
            this.initializeApp();
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    presentLoading() {
        this.loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.loader.present();
    }

    initializeApp() {
        this.auth.afAuth.authState
            .subscribe(
                user => {
                    if (user) {
                        this.rootPage = TabsPage;
                        this.loader.dismiss();
                    } else {
                        this.rootPage = SignInPage;
                        this.loader.dismiss();
                    }
                },
                () => {
                    this.rootPage = SignInPage;
                    this.loader.dismiss();
                }
            );


    }
}

import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {TabsPage} from '../pages/tabs/tabs';
import {ProductPage} from "../pages/product/product";
import {FavouritePage} from "../pages/favourite/favourite";
import {CartPage} from "../pages/cart/cart";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {PopoverUserComponent} from "../components/popover-user/popover-user";
import {AngularFireModule} from "@angular/fire";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {FIREBASE_CONFIG} from "./firebase.credentials";

@NgModule({
    declarations: [
        MyApp,
        ProductPage,
        FavouritePage,
        CartPage,
        PopoverUserComponent,
        TabsPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(FIREBASE_CONFIG),
        AngularFireAuthModule,
        AngularFireDatabaseModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ProductPage,
        FavouritePage,
        CartPage,
        PopoverUserComponent,
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}

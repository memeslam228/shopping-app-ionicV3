import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {TabsPage} from '../pages/tabs/tabs';
import {ProductPage} from "../pages/product/product";
import {FavouritePage} from "../pages/favourite/favourite";
import {SignInPage} from "../pages/sign-in/sign-in";
import {SignUpPage} from "../pages/sign-up/sign-up";
import {CartPage} from "../pages/cart/cart";
import {HeaderMenuComponent} from "../components/header-menu/header-menu";
import {ProductItemComponent} from "../components/product-item/product-item";
import {FavouriteItemComponent} from "../components/favourite-item/favourite-item";
import {ItemDetailsPage} from "../pages/product-details/item-details";

import {AngularFireModule} from "@angular/fire";
import {AngularFireAuth, AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {FIREBASE_CONFIG} from "./firebase.credentials";
import {AuthProvider} from '../providers/auth/auth';
import {NgxErrorsModule} from "@ultimate/ngxerrors";
import {FavouriteProvider} from '../providers/favourite/favourite';
import {FireDatabaseProvider} from '../providers/fire-crud/fire-database';
import {CartProvider} from '../providers/cart/cart';
import {ToastProvider} from '../providers/toast/toast';
import {CartItemComponent} from "../components/cart-item/cart-item";
import {SortPipe} from "../pipes/sort/sort";

@NgModule({
    declarations: [
        MyApp,
        ProductPage,
        FavouritePage,
        CartPage,
        SignInPage,
        SignUpPage,
        TabsPage,
        ItemDetailsPage,
        ProductItemComponent,
        FavouriteItemComponent,
        CartItemComponent,
        HeaderMenuComponent,
        SortPipe
    ],
    imports: [
        BrowserModule,
        NgxErrorsModule,
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
        SignInPage,
        SignUpPage,
        TabsPage,
        ItemDetailsPage,
        ProductItemComponent,
        CartItemComponent,
        FavouriteItemComponent,
        HeaderMenuComponent
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AuthProvider,
        AngularFireAuth,
        FireDatabaseProvider,
        FavouriteProvider,
        CartProvider,
        ToastProvider
    ]
})
export class AppModule {
}

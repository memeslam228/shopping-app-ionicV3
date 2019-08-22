import {NgModule, ErrorHandler} from '@angular/core';
import {AngularFireModule} from "@angular/fire";
import {AngularFireAuth, AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {BrowserModule} from '@angular/platform-browser';
import {FIREBASE_CONFIG} from "./firebase.credentials";

import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TabsPage} from '../pages/tabs/tabs';
import {ProductPage} from "../pages/product/product";
import {FavouritePage} from "../pages/favourite/favourite";
import {SignInPage} from "../pages/sign-in/sign-in";
import {SignUpPage} from "../pages/sign-up/sign-up";
import {CartPage} from "../pages/cart/cart";
import {ProductDetailsCartPage} from "../pages/product-details-cart/product-details-cart";
import {ItemDetailsPage} from "../pages/product-details/item-details";
import {ProductDetailsFavouritePage} from "../pages/product-details-favourite/product-details-favourite";

import {HeaderMenuComponent} from "../components/header-menu/header-menu";
import {ProductItemComponent} from "../components/product-item/product-item";
import {FavouriteItemComponent} from "../components/favourite-item/favourite-item";
import {AddToCartComponent} from "../components/add-to-cart/add-to-cart";
import {CartItemComponent} from "../components/cart-item/cart-item";

import {NgxErrorsModule} from "@ultimate/ngxerrors";

import {AuthProvider} from '../providers/auth/auth';
import {FavouriteProvider} from '../providers/favourite/favourite';
import {FireDatabaseProvider} from '../providers/fire-crud/fire-database';
import {CartProvider} from '../providers/cart/cart';
import {ToastProvider} from '../providers/toast/toast';
import {SortPipe} from "../pipes/sort";

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
        ProductDetailsCartPage,
        ProductDetailsFavouritePage,
        ProductItemComponent,
        AddToCartComponent,
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
        ProductDetailsCartPage,
        ProductDetailsFavouritePage,
        ProductItemComponent,
        CartItemComponent,
        AddToCartComponent,
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

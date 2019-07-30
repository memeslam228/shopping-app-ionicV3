import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {TabsPage} from '../pages/tabs/tabs';
import {ProductPage} from "../pages/product/product";
import {FavouritePage} from "../pages/favourite/favourite";
import {SignInPage} from "../pages/sign-in/sign-in";
import {SignUpPage} from "../pages/sign-up/sign-up";
import {CartPage} from "../pages/cart/cart";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {PopoverUserComponent} from "../components/popover-user/popover-user";
import {AngularFireModule} from "@angular/fire";
import {AngularFireAuth, AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {FIREBASE_CONFIG} from "./firebase.credentials";
import {AuthProvider} from '../providers/auth/auth';
import {NgxErrorsModule} from "@ultimate/ngxerrors";
import {FireDatabaseProvider} from '../providers/fire-crud/fire-database';

@NgModule({
    declarations: [
        MyApp,
        ProductPage,
        FavouritePage,
        CartPage,
        PopoverUserComponent,
        SignInPage,
        SignUpPage,
        TabsPage
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
        PopoverUserComponent,
        SignInPage,
        SignUpPage,
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AuthProvider,
        AngularFireAuth,
        FireDatabaseProvider
    ]
})
export class AppModule {
}

import {Component} from '@angular/core';

import {App, MenuController} from "ionic-angular";

import {SignInPage} from "../../pages/sign-in/sign-in";

import {AuthProvider} from "../../providers/auth/auth";

@Component({
    selector: 'header-menu',
    templateUrl: 'header-menu.html'
})
export class HeaderMenuComponent {
    name: string;


    constructor(private auth: AuthProvider, public menuCtrl: MenuController, public app: App) {
    }

    logoutClicked() {
        this.auth.logOut();
        this.menuCtrl.close();
        var nav = this.app.getRootNav();
        nav.setRoot(SignInPage);
    }



}

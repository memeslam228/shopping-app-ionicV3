import {Component} from '@angular/core';
import {App, NavController, ViewController} from "ionic-angular";

import {SignInPage} from "../../pages/sign-in/sign-in";
import {AuthProvider} from "../../providers/auth/auth";

@Component({
    selector: 'popover-user',
    templateUrl: 'popover-user.html'
})
export class PopoverUserComponent {

    name: string;

    constructor(public nav: NavController, private app: App, private view: ViewController, private auth: AuthProvider) {
        let email = this.auth.getEmail();
        let nameBoof = email.split("@");
        this.name = nameBoof[0];
    }


    onLogOut() {
        this.auth.logOut();
        this.view.dismiss();
        this.app.getRootNav().setRoot(SignInPage);
    }

}

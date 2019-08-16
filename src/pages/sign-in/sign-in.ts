import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NavController} from "ionic-angular";

import {TabsPage} from "../tabs/tabs";
import {SignUpPage} from "../sign-up/sign-up";

import {AuthProvider} from "../../providers/auth/auth";


@Component({
    selector: 'page-sign-in',
    templateUrl: 'sign-in.html',
})
export class SignInPage {
    loginForm: FormGroup;
    loginError: string;

    constructor(private navCtrl: NavController,
                private auth: AuthProvider,
                fb: FormBuilder) {
        this.loginForm = fb.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });
    }

    login() {
        let data = this.loginForm.value;

        if (!data.email) {
            return;
        }

        let credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signInWithEmail(credentials)
            .then(
                () => {
                    this.navCtrl.setRoot(TabsPage);
                    },
                error => this.loginError = error.message
            );
    }

    signup() {
        this.navCtrl.push(SignUpPage);
    }

    ionViewDidLoad() {
    }

}

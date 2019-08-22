import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {NavController} from 'ionic-angular';

import {TabsPage} from '../tabs/tabs';

import {AuthProvider} from '../../providers/auth/auth';

@Component({
    selector: 'page-sign-up',
    templateUrl: 'sign-up.html',
})
export class SignUpPage {

  signupError: string;
  form: FormGroup;

  constructor(
    fb: FormBuilder,
    private navCtrl: NavController,
    private auth: AuthProvider
  ) {
    this.form = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  signup() {
    let data = this.form.value;
    let credentials = {
      email: data.email,
      password: data.password
    };
    this.auth.signUp(credentials).then(
      () => {
        this.navCtrl.setRoot(TabsPage);
      },
      error => this.signupError = error.message
    );
  }

  ionViewDidLoad() {}

}

import {Component} from '@angular/core';
import {PopoverController} from 'ionic-angular';
import {PopoverUserComponent} from "../../components/popover-user/popover-user";

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-cart',
    templateUrl: 'cart.html',
})
export class CartPage {

    constructor(public popover: PopoverController) {
    }

    presentPopover(event) {
        const popover = this.popover.create(PopoverUserComponent);
        popover.present({
            ev: event
        });
    }

}

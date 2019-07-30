import {Component} from '@angular/core';
import {PopoverController} from 'ionic-angular';

import {PopoverUserComponent} from "../../components/popover-user/popover-user";

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

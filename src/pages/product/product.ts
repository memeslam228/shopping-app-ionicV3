import {Component} from '@angular/core';
import {PopoverController} from "ionic-angular";
import {PopoverUserComponent} from "../../components/popover-user/popover-user";

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-product',
    templateUrl: 'product.html',
})
export class ProductPage {

    constructor(public popover: PopoverController) {
    }

    presentPopover(event) {
        const popover = this.popover.create(PopoverUserComponent);
        popover.present({
            ev : event
        });
    }

}

import {Component} from '@angular/core';
import {PopoverController} from 'ionic-angular';
import {PopoverUserComponent} from "../../components/popover-user/popover-user";

/**
 * Generated class for the FavouritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-favourite',
    templateUrl: 'favourite.html',
})
export class FavouritePage {

    constructor(public popover: PopoverController) {
    }

    presentPopover(event) {
        const popover = this.popover.create(PopoverUserComponent);
        popover.present({
            ev: event
        });
    }

}

import {Component} from '@angular/core';

/**
 * Generated class for the PopoverUserComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'popover-user',
    templateUrl: 'popover-user.html'
})
export class PopoverUserComponent {

    name: string;

    constructor() {
        this.name = "Sergey";
    }

}

import {Pipe} from '@angular/core';

import {Item} from "../../providers/fire-crud/item";

@Pipe({
    name: 'sort',
})

export class SortPipe {

    private static sortBtoS(a, b) {
        if (a.price < b.price) {
            return -1;
        }
        if (a.price > b.price) {
            return 1;
        }
        return 0;
    }

    private static sortStoB(a, b) {
        if (a.price > b.price) {
            return -1;
        }
        if (a.price < b.price) {
            return 1;
        }
        return 0;
    }

    private static sortAZ(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }

    private static sortZA(a, b) {
        if (a.name > b.name) {
            return -1;
        }
        if (a.name < b.name) {
            return 1;
        }
        return 0;
    }

    static subSelected(items: Item[], type: string) {
        if (type === 'fromEtoC') {
            return items.sort(SortPipe.sortStoB);
        }
        if (type === 'fromCtoE') {
            return items.sort(SortPipe.sortBtoS);
        }
        if (type === 'A-Z') {
            return items.sort(SortPipe.sortAZ);
        }
        if (type === 'Z-A') {
            return items.sort(SortPipe.sortZA);
        }
    }

}

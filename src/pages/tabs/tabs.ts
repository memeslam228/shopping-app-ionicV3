import { Component } from '@angular/core';
import {ProductPage} from "../product/product";
import {FavouritePage} from "../favourite/favourite";
import {CartPage} from "../cart/cart";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProductPage;
  tab2Root = FavouritePage;
  tab3Root = CartPage;

  constructor() {

  }
}

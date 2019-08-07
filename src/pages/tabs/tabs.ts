import { Component } from '@angular/core';

import {CartPage} from '../cart/cart';
import {ProductPage} from '../product/product';
import {FavouritePage} from '../favourite/favourite';

import {CartProvider} from '../../providers/cart/cart';
import {FavouriteProvider} from '../../providers/favourite/favourite';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProductPage;
  tab2Root = FavouritePage;
  tab3Root = CartPage;

  constructor(private favourite: FavouriteProvider, private cart: CartProvider) {}
}

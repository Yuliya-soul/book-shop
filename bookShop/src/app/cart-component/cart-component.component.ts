import { Component} from '@angular/core';
import {  databaseBooked1} from '../books';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss']
})
export class CartComponentComponent  {
  constructor(
    private cartService: CartService
) { }
  booksBooked=databaseBooked1

  clear() {

    this.booksBooked= this.cartService.clearCart()}

}

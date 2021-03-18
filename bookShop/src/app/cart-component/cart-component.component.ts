import { Component} from '@angular/core';
import { database1, databaseBooked1} from '../books';
import { CartService} from '../cart.service';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss'],
  providers: [CartService]
})
export class CartComponentComponent  {
  constructor(
    private cartService: CartService
) { ;}
  booksBooked=databaseBooked1;
  books=database1;

  
  removeAllBooks() {
    this.cartService.removeAllBooks()
 }  

 
}

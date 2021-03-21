import { Component} from '@angular/core';
import { BookService } from '../services/book.service';
import { CartService} from '../services/cart.service';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss'],
  providers: [CartService,BookService]
})
export class CartComponentComponent  {
  constructor(
    private cartService: CartService,
    private bookService: BookService
) { ;}
  booksBooked=this.bookService.getBooksBasket()
  books=this.bookService.getBooksStorage();
  totalBooked=0;
  totalSumBooked=0;
  
  removeAllBooks() {
    this.cartService.removeAllBooks();
    this.totalBooked=0;
    this.totalSumBooked=0;
 }  
 onChanged(increased:any){
  if(increased==true){ 
    this.totalBooked=this.cartService.updateCartData();
    this.totalSumBooked=this.cartService.updateTotalSum();
   }
}

}

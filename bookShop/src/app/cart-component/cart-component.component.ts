import { Component} from '@angular/core';
import { database1, databaseBooked1} from '../books';
import { CartService} from '../services/cart.service';

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

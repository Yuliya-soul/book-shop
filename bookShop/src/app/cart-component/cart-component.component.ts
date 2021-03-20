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
  totalBooked=this.cartService.updateCartData()
  totalSumBooked=this.cartService.updateCartData();
  
  removeAllBooks() {
    this.cartService.removeAllBooks()
 }  
  onChanged(increased:any){
   if(increased==true){ 
     this.totalBooked=this.cartService.updateCartData();
     this.totalSumBooked=this.cartService.updateTotalSum();
   }
  }
}

import { Component, OnInit} from '@angular/core';
import { database1 } from '../books';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-books-list-component',
  templateUrl: './books-list-component.component.html',
  styleUrls: ['./books-list-component.component.scss']
})
export class BooksListComponentComponent  {
  constructor(
    private cartService: CartService,

  ) { } 

  books = database1;
  totalBooked=0;
  totalSumBooked=0;
  
  onChanged(increased:any){
   if(increased==true){ 
     this.totalBooked=this.cartService.updateCartData();
     this.totalSumBooked=this.cartService.updateTotalSum();
    }
}
}

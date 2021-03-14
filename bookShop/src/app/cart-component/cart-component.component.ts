import { Component} from '@angular/core';
import {  Book, database1, databaseBooked1} from '../books';
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
  booksBooked=databaseBooked1;
  books=database1;

  clear() {
    
    for (let index = 0; index < this.books.length; index++) {
      for (let index1 = 0; index1 < this.booksBooked.length; index1++){
          if(this.booksBooked[index1].id===this.books[index].id){
     const newQantity=this.books[index].quantity+ this.booksBooked[index1].quantity; 
      const BookChangeElement=new Book(
        this.books[index].name,
        this.books[index].description, 
        this.books[index].price, 
        this.books[index].createDate, 
        true, 
        this.books[index].randomRole,
        newQantity,
        this.books[index].id);
            this.books.splice(index, 1,BookChangeElement); 
            this.booksBooked.splice(index1,1) ;
       }
      }
    }

  
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { database1, databaseBooked1, Book, IBook } from '../products';
import{CartService} from '../../app/cart.service'
import { BookService } from '../book.service';
@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.scss']
 
})

export class BookComponentComponent {
  constructor(
     private cartService: CartService,
) { } 
books = database1;
databaseBooked1= databaseBooked1;
counter = 1;
totalBooked=0;
totalSumBooked=0

@Input() book?: IBook;  

buy(valueBook: string,$event:any):void {
          
  this.cartService.addBook(valueBook,$event);
}

view() {
  window.alert('The product has been viewed!');
}


}



import { Component, Input, OnInit } from '@angular/core';
import { database1, databaseBooked1, Book, IBook } from '../books';
import{CartService} from '../../app/cart.service'
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.scss'],
  providers: [BookService,CartService]
 
})

export class BookComponentComponent  {
  constructor(
     private cartService: CartService,
     private bookService:BookService,
   ) { } 

 

books = database1;
databaseBooked1= databaseBooked1;
counter = 1;
totalBooked=0;
totalSumBooked=0

@Input() book?: IBook;  

buy(valueBook: string,$event:Book):void {
  this.cartService.addBook(valueBook,$event);
}

view() {
  window.alert('The product has been viewed!');
}


}



import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { database1, databaseBooked1, Book, IBook } from '../books';
import{CartService} from '../services/cart.service'
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.scss'],
  providers: [BookService,CartService]
 
})

export class BookComponentComponent {
  constructor(
     private cartService: CartService,

   ) { } 

books = database1;
databaseBooked1= databaseBooked1;
counter = 1;

@Input() book?: IBook;  
@Output() onChanged = new EventEmitter<boolean>();

buy(valueBook: string,$event:Book,increased:any):void {
  this.cartService.addBook(valueBook,$event);
  this.onChanged.emit(increased)
}

view() {
  window.alert('The product has been viewed!');
}
increaseQuantity() { 
  this.counter++; }
decreaseQuantity() { 
  if(this.counter>0)
  {this.counter--;} }

}



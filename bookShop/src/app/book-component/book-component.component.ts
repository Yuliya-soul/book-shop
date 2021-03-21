import { Component, Input } from '@angular/core';
import { Book, IBook } from '../books';
import{CartService} from '../services/cart.service'
import { BookService } from '../services/book.service';


@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.scss'],
  providers: [BookService,CartService]
 
})

export class BookComponentComponent {
  httpService: any;
  constructor(
    private cartService: CartService,
    private bookService:BookService,
   
   ) { } 


books=this.bookService.getBooksStorage()
databaseBooked1=this.bookService.getBooksBasket()
counter = 1;


@Input() book?: IBook;  
//@Output() onChanged = new EventEmitter<boolean>();


buy(valueBook: string,$event:Book,increased:any):void {
  this.cartService.addBook(valueBook,$event);
 // this.onChanged.emit(increased);

  
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




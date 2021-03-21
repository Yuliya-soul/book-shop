import { ChangeDetectionStrategy, Component,  EventEmitter, Input,  Output } from '@angular/core';
import { IBook} from '../books';
import { BookService } from '../services/book.service';
import{CartService} from '../services/cart.service'


@Component({
  selector: 'app-cart-item-component',
  templateUrl: './cart-item-component.component.html',
  styleUrls: ['./cart-item-component.component.scss'],
  providers: [BookService,CartService],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class CartItemComponentComponent  {
  @Input() book?: IBook;
  @Output() newItemEvent = new EventEmitter<string>();
 // @Output() onChanged = new EventEmitter<boolean>();
  books = this.bookService.getBooksStorage();
  counter1 = 1;
 
  constructor(
      private cartService: CartService,
      private bookService: BookService
  ) { }


  removeBook(value: string, book:any,increased:boolean) {
  this.cartService.removeBook(value,book)
  this.counter1=Number.parseInt(value)
  //this.onChanged.emit(increased);
  for (let index = 0; index < this.books.length; index++) {
      if(this.books[index].id===book.id){
        this.books[index].quantity=this.books[index].quantity+this.counter1;
        this.books[index].isAvailable=true
      }
    } 
    this.counter1=1; 
 
  }
  increaseQuantity() { 
    this.counter1++; }
  decreaseQuantity() { 
    if(this.counter1>0)
    {this.counter1--;} }
  
}

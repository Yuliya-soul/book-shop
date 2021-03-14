import { ChangeDetectionStrategy, Component,  EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook, database1,databaseBooked1} from '../books';
import{CartService} from '../../app/cart.service'


@Component({
  selector: 'app-cart-item-component',
  templateUrl: './cart-item-component.component.html',
  styleUrls: ['./cart-item-component.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class CartItemComponentComponent  {
  constructor(
      private cartService: CartService
  ) { }
   @Input() book?: IBook;
   @Output() newItemEvent = new EventEmitter<string>();
 
   books = database1;
  // databaseBooked= databaseBooked1;
   counter1 = 1;


  removeBook(value: string, book:any) {

  this.cartService.removeBook(value,book)
  this.counter1=Number.parseInt(value)

  for (let index = 0; index < this.books.length; index++) {
      if(this.books[index].id===book.id){
        this.books[index].quantity=this.books[index].quantity+this.counter1;
        this.books[index].isAvailable=true
      }
    } 
    this.counter1=1; 
   


  }

   increment():void  {
    this.counter1++;
  }
 decrement():void  { 
   if (this.counter1<=1) {this.counter1=0;}
   else{this.counter1--; }
 }

}

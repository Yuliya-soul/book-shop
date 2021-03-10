import { ChangeDetectionStrategy, Component,  EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook, database1,databaseBooked1} from '../products';
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
   databaseBooked= databaseBooked1;
   counter1 = 1;


  removeBook(value: string, book:any) {
  
    if(value===''){value='1'}
    this.counter1=Number.parseInt(value)
    this.newItemEvent.emit(value);
 
  for (let index = 0; index < this.databaseBooked.length; index++) {
    const element = this.databaseBooked[index];
    if((book.id===element.id)&&(element.quantity>=this.counter1)){
        element.quantity= element.quantity-this.counter1;
     
    }
   }
  

  }

   increment():void  {
    this.counter1++;
  }
 decrement():void  { 
   if (this.counter1<=1) {this.counter1=0;}
   else{this.counter1--; }
 }

}

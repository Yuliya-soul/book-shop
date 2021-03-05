import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book, databaseBooked1,IBook } from '../products';

@Component({
  selector: 'app-cart-item-component',
  templateUrl: './cart-item-component.component.html',
  styleUrls: ['./cart-item-component.component.scss']
})
export class CartItemComponentComponent implements OnInit {
   @Input() hero?: IBook;


  
 ngOnInit(): void {
   console.log('CartItemComponentComponent')
 }

}

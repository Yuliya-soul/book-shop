import { Component, Input, OnInit } from '@angular/core';
import { databaseBooked1 } from '../products';
@Component({
  selector: 'app-cart-item-component',
  templateUrl: './cart-item-component.component.html',
  styleUrls: ['./cart-item-component.component.scss']
})
export class CartItemComponentComponent implements OnInit {
  databaseBooked=databaseBooked1
  constructor() { }
  @Input() item: string | undefined; // decorate the property with @Input()

  
 ngOnInit(): void {
   console.log('CartItemComponentComponent')
 }

}

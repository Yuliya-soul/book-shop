import { Component} from '@angular/core';
import {  databaseBooked1} from '../books';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss']
})
export class CartComponentComponent  {
  booksBooked=databaseBooked1

  }

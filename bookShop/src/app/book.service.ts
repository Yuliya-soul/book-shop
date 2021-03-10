import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { IBook, database1,databaseBooked1, Book} from '../app/products';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  @Input() book?: IBook;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(
    private cartService: CartService
) { } 
books = database1;
databaseBooked1= databaseBooked1;
counter = 1;
totalBooked=0;
totalSumBooked=0

  getBooks(){
    return this.books;
  }
}
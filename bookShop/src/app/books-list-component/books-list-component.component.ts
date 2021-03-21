import { Component, OnInit} from '@angular/core';
import {  Observable } from 'rxjs';

import { BookService } from '../services/book.service';
import { CartService } from '../services/cart.service';
import {HttpClient} from '@angular/common/http';
import { Book, IBook } from '../books';
@Component({
  selector: 'app-books-list-component',
  templateUrl: './books-list-component.component.html',
  styleUrls: ['./books-list-component.component.scss'],
  providers: [CartService,BookService]
})
export class BooksListComponentComponent  implements OnInit {
  heroes: any;
  constructor(
    private cartService: CartService,
    private bookService: BookService,
     ) { } 
 // books=this.bookService.getBooksStorage();
   books:IBook[] | undefined
   totalBooked=0;
  totalSumBooked=0;
  users?: Observable<any> 
  user?: IBook; // данные вводимого пользователя
  receivedUser?: IBook; // полученный пользователь
  done: boolean = false;

  ngOnInit(){
  this.bookService.getBooks().subscribe((books) => this.books = books)  
  this.users = this.bookService.getBooksJson();
}
  
  onChanged(increased:any){
   if(increased==true){ 
     this.totalBooked=this.cartService.updateCartData();
     this.totalSumBooked=this.cartService.updateTotalSum();
    }
  }



}

import { Component} from '@angular/core';
import { database1 } from '../books';
import{CartService} from '../../app/cart.service'
@Component({
  selector: 'app-books-list-component',
  templateUrl: './books-list-component.component.html',
  styleUrls: ['./books-list-component.component.scss']
})
export class BooksListComponentComponent  {
 
  books = database1;


}

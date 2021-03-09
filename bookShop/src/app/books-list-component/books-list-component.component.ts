import { Component} from '@angular/core';
import { database1, databaseBooked1, Book } from '../products';

@Component({
  selector: 'app-books-list-component',
  templateUrl: './books-list-component.component.html',
  styleUrls: ['./books-list-component.component.scss']
})
export class BooksListComponentComponent  {
  books = database1;
  getItems() {
    return this.books;
  }

}

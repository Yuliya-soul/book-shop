import {  Injectable} from '@angular/core';
import { database1, databaseBooked1, IBook} from '../books';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class BookService  {
constructor(private http: HttpClient){ }
database=database1
databaseBooked= databaseBooked1;

configUrl = 'assets/Book.json';

 getBooksStorage() {
  return this.database;
  }
  getBooksBasket() {
    return this.databaseBooked;
    }
  
  getBooksJson() {
    return this.http.get(this.configUrl);
  }
    
  getBooks(): Observable<IBook[]> {
    return of(this.database);
  }

}



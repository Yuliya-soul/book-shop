import {  Injectable} from '@angular/core';
import { Book, database1, databaseBooked1, IBook} from '../books';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class BookService  {
  messageService: any;
constructor(private http: HttpClient){ }
database=database1
databaseBooked= databaseBooked1;
id1?:number
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
  getBookById(id: string|null){
   if(id!=null){
   this.id1=Number.parseInt(id);
     }
console.log(this.id1)
  return JSON.stringify(this.database.filter(item => item.id === this.id1))
  }
 
}



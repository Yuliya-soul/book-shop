import {  Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BookService  {
database=[]


 getBooksStorage() {
  return this.database;
  }

    
}



import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import { IBook } from './books';
import { BookService } from './services/book.service';
  
@Component({
    selector: 'item-info',
    template: `<h2>Product {{id}}</h2>
    <br>
    
              `,
    providers: [BookService]        
})
export class ItemComponent{ 
    
    id?: number|undefined;
 
    private routeSubscription: Subscription;
   
    constructor(
        private route: ActivatedRoute,
        private bookService:BookService,
        
        ){
         
        this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
      
    }
   // selectedBook=this.bookService.getBookById(2)
}
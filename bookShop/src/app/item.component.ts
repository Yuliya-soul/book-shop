import { Component, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import { IBook } from './books';
import { BookService } from './services/book.service';
  
@Component({
    selector: 'item-info',
    template: `<h2>Product id: {{id}}</h2>
    <br>
  {{bookSelected}}
              `,
    providers: [BookService]        
})
export class ItemComponent implements OnInit{ 
    id?: number|undefined;
    bookId?: string;
    bookSelected?:string;
    private routeSubscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private bookService:BookService,
        
        ){
         
        this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
     }
    ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    this.bookSelected=this.bookService.getBookById(bookId);
    }


}
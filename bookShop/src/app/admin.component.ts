import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

import { BookService } from './services/book.service';
  
@Component({
    selector: 'admin',
    template: `<h2>welcome to admin component {{id}}</h2>
    <br>
  
              `,
        
})
export class AdminComponent{ 
    
    id?: number|undefined;
    private routeSubscription: Subscription;
   
    constructor(
        private route: ActivatedRoute,
           
        ){
         
        this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);

    }
}
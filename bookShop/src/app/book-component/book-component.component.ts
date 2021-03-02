import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { database1, User } from '../products';


@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.scss']
})

export class BookComponentComponent implements OnInit {
databaseBooked: User[] =  [];
 
database = database1;

buy(product: any) {
  console.log(product);
this.databaseBooked.push(product)
if (product.quantity>0) {product.quantity=product.quantity-1};
if(product.quantity===0){product.isAvailable=false}
 console.log(this.databaseBooked);
}

view() {
  window.alert('The product has been viewed!');
}
ngOnInit(): void {
  throw new Error('Method not implemented.');
}

}


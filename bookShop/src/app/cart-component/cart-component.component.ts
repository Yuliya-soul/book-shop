import { Component} from '@angular/core';
import {  databaseBooked1, IBook,database1} from '../products';



@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss']
})
export class CartComponentComponent  {

booksBooked=databaseBooked1
selectedHero?: IBook;
 
 database1=database1
 counter = 1;

addItem(newItem: any,book:any) {
 this.counter=Number.parseInt(newItem)

  for (let index = 0; index < database1.length; index++) {
    if(database1[index].id===book.id){
      database1[index].quantity=database1[index].quantity+this.counter;
      database1[index].isAvailable=true
    }
  }
  this.counter=1; 
 
}

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { database1, databaseBooked1, Book } from '../products';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.scss']
})

export class BookComponentComponent implements OnInit {

database = database1;
  databaseBooked1= databaseBooked1;


buy($event:any):void {
 let exist=false;
  for (let index = 0; index < databaseBooked1.length; index++) {
    const element = databaseBooked1[index];
    if($event.id===element.id){
    exist=true
      element.quantity++
    }
  }
  if (exist==false) {this.databaseBooked1.push( 
    new Book($event.name,
      $event.description, 
      $event.price, 
       $event.createDate, 
       true, 
       1,
       $event.id));}
  
  
if ($event.quantity>0) {
  $event.quantity=$event.quantity-1;
};
if($event.quantity===0){$event.isAvailable=false}
console.log(this.databaseBooked1)

}

view() {
  window.alert('The product has been viewed!');
}
ngOnInit(): void {
  throw new Error('Method not implemented.');
}

}



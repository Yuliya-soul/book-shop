import { Component, Input, OnInit } from '@angular/core';
import { database1, databaseBooked1, Book, IBook } from '../products';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.scss']
 
})

export class BookComponentComponent {
books = database1;
databaseBooked1= databaseBooked1;
counter = 1;
@Input() book?: IBook;  

buy(valueBook: string,$event:any):void {
 
  this.counter=Number.parseInt(valueBook)
  if(($event.quantity>=this.counter)&&(this.counter>=1)){
    let exist=false;
  for (let index = 0; index < databaseBooked1.length; index++) {
    const element = databaseBooked1[index];
    if($event.id===element.id){
    exist=true
      element.quantity= element.quantity+this.counter;
     
    }
  }
  if (exist==false) {
    this.databaseBooked1.push( 
    new Book(
      $event.name,
      $event.description, 
      $event.price, 
      $event.createDate, 
       true, 
       this.counter,
       $event.id));
       this.counter;
      };
    
      if ($event.quantity>0) {
        $event.quantity=$event.quantity-this.counter;
      };
      if($event.quantity===0){$event.isAvailable=false}
      }
else {alert('Do not have enough books at storage!')}
 
 }


view() {
  window.alert('The product has been viewed!');
}


}




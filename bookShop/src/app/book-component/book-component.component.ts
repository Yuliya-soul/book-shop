import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { database1, databaseBooked1, Book } from '../products';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.scss']
 
})

export class BookComponentComponent implements OnInit {

database = database1;
databaseBooked1= databaseBooked1;
counter: number = 1;
@Output() newItemEvent = new EventEmitter<string>();

increment():void  {
   this.counter++;
 }
decrement():void  { 
  if (this.counter<=1) {this.counter=0;}
  else{this.counter--; }
}
addNewItem(valueBook: string){
this.counter=Number.parseInt(valueBook)
}
buy($event:any):void {

  if($event.quantity>=this.counter){
    let exist=false;
  for (let index = 0; index < databaseBooked1.length; index++) {
    const element = databaseBooked1[index];
    if($event.id===element.id){
    exist=true
      element.quantity= element.quantity+this.counter
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
        $event.quantity=$event.quantity-this.counter;
      };
      if($event.quantity===0){$event.isAvailable=false}
      }
else {alert('Do not have enough books at storage!')}
  
 console.log(this.databaseBooked1)
 
 }
 

view() {
  window.alert('The product has been viewed!');
}
ngOnInit(): void {
  throw new Error('Method not implemented.');
}

}


function buySelected(product: any, any: any) {
  throw new Error('Function not implemented.');
}


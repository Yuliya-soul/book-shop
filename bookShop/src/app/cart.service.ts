import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { IBook, database1,databaseBooked1, Book} from '../app/products';
@Injectable({
  providedIn: 'root'
})

export class CartService {
  @Input() book?: IBook;
  @Output() newItemEvent = new EventEmitter<string>();

  books = database1;
  databaseBooked= databaseBooked1;
  counter = 1;
  sum=0;

  addBook(valueBook: string,$event:any):void {
    this.counter=Number.parseInt(valueBook)
    this.sum=this.sum+this.counter;
    console.log(this.sum)
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
     this.databaseBooked.push( 
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
 
  removeBook(value: string, book:any) {
  if(value===''){value='1'}
    this.counter=Number.parseInt(value)
    this.newItemEvent.emit(value);
    this.sum=this.sum-this.counter;
    console.log(this.sum)

  for (let index = 0; index < this.databaseBooked.length; index++) {
    const element = this.databaseBooked[index];
    if((book.id===element.id)&&(element.quantity>=this.counter)){
       element.quantity= element.quantity-this.counter;
    }
  }
  }
  getShippingPrices(){
    console.log(this.sum)
    return this.sum
  }


}

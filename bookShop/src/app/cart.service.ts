import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { IBook, database1,databaseBooked1, Book} from './books';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})


export class CartService {
  @Input() book?: IBook;
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(
   
) { } 
  books =database1;
  databaseBooked= databaseBooked1;
  counter = 1;
  exist=false;

  addBook(valueBook: string,$event:any):void {
    if(valueBook===''){valueBook='0'};
    this.counter=Number.parseInt(valueBook);
      if((this.counter>=1)&&(this.counter<=$event.quantity)){
            for (let index = 0; index < this.databaseBooked.length; index++) {
            const element = this.databaseBooked[index];
            if(element.quantity===0){
               this.databaseBooked.splice(index, 1);
             }
             if($event.id===this.databaseBooked[index].id){
               const newQuantity=this.databaseBooked[index].quantity+this.counter
              const exchangeBook= new Book (
                 $event.name,
                  $event.description, 
                  $event.price, 
                  $event.createDate, 
                  true, 
                  $event.randomRole,
                  newQuantity,
                  $event.id)               
              this.databaseBooked.splice(index,1,exchangeBook);
              this.exist=true
            }
          } 
      
          if((this.exist==false)&&((this.counter>=1))) {
        this.databaseBooked.push( 
          new Book(
            $event.name,
            $event.description, 
            $event.price, 
            $event.createDate, 
            true, 
            $event.randomRole,
            this.counter,
            $event.id)
          );
            this.counter;
       
          };
        
          if ($event.quantity>0) {
            $event.quantity=$event.quantity-this.counter;
          };
          if($event.quantity===0){$event.isAvailable=false};
     
      }
       else {alert('Do not have enough books at storage!')}
  }

  removeBook(value: string, book:any) {
     if(value===''){value='0'}
  
    this.counter=Number.parseInt(value)
    this.newItemEvent.emit(value);

  
  for (let index = 0; index < this.databaseBooked.length; index++) {
    const element = this.databaseBooked[index];
    if((book.id===element.id)&&(element.quantity>=this.counter)){
      this.databaseBooked[index].quantity= this.databaseBooked[index].quantity-this.counter;
    }
    if(element.quantity===0){
      this.databaseBooked.splice(index, 1);
      }

  }
  }
  clearCart() {
   return this.databaseBooked=[]
      }


}

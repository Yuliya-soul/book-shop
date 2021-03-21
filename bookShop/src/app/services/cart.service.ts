import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBook, database1,databaseBooked1, Book} from '../books';

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
  counter = 0;
  exist=false;
  totalQuantity=0;
  totalSum=0;
  CartProduct=''

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
              this.exist=true;
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
         this.totalQuantity= this.updateCartData();
         this.totalSum=this.updateTotalSum();
         this.CartProduct=this.updateCartProduct()
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
    this.totalQuantity=this.updateCartData();
    this.totalSum=this.updateTotalSum();
   
  }
  removeAllBooks() {
      for (let index = 0; index < this.books.length; index++) {
      for (let index1 = 0; index1 < this.databaseBooked.length; index1++){
          if(this.databaseBooked[index1].id===this.books[index].id){
     const newQantity=this.books[index].quantity+ this.databaseBooked[index1].quantity; 
      const BookChangeElement=new Book(
        this.books[index].name,
        this.books[index].description, 
        this.books[index].price, 
        this.books[index].createDate, 
        true, 
        this.books[index].randomRole,
        newQantity,
        this.books[index].id);
            this.books.splice(index, 1,BookChangeElement); 
            this.databaseBooked.splice(index1,1) ;
        }
        }
      }
      this.totalQuantity=this.updateCartData();
      this.totalSum=this.updateTotalSum();
   
  }
  updateCartData(){
    this.totalQuantity=0;
    for (let index = 0; index < this.databaseBooked.length; index++) {
      this.totalQuantity=this.totalQuantity+this.databaseBooked[index].quantity;
    }
    //  console.log('totalQuantity',this.totalQuantity)
      return this.totalQuantity
    }
  updateTotalSum(){
    this.totalSum=0;
    for (let index = 0; index < this.databaseBooked.length; index++) {
      this.totalSum=this.totalSum+this.databaseBooked[index].quantity*this.databaseBooked[index].price;
     }
  //  console.log('totalSum',this.totalSum)
    return this.totalSum
  }
updateCartProduct(){
let str=''
  for (let index = 0; index < this.databaseBooked.length; index++) {
str=str+this.databaseBooked[index].name+'  '

   }
 //  console.log( str)
return str
}

 
}

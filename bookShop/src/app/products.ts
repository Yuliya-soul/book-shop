declare var require: any

var ngfaker = require('ng-faker');
/* function RoleMaker(number: number){
  if (number===0) return 'Fiction'
  if (number===1) return 'Non—fiction'
  if (number===2) return 'Fantasy'
    if (number===3) return 'Politics'
}  */
var database: Book[] =  [];
var databaseBooked: Book[] =  [];

const enum Genre  {
  Fiction,
  NonFiction, 
  Fantasy,
  Politics 
 
}
//declare var require: any
 export interface IBook {
  name: string;
  description: string;
  price: number;
 // category: Genre ;
  createDate: number;
  isAvailable: boolean;
  quantity:number;
  id:number;
}

  export class Book implements IBook{
    name: string;
    description: string ;
    price: number;
  //  category: Genre;
    createDate: number;
    isAvailable: boolean;
    quantity:number;
    id:number;
     
    constructor(bookName: string, 
      bookDescription: string, 
      bookPrice: number, 
      bookCreateDate: number,
      bookIsAvailable:boolean,
      bookQuantity:number,
      bookId:number ) 
      {
       
      this.name = bookName;
      this.description = bookDescription;
      this.price = bookPrice;
      this.createDate=bookCreateDate;
      this.isAvailable=bookIsAvailable;
      this.quantity=bookQuantity;
     // this.category=bookCategory
      this.id=bookId;
     
    }
  
    getFullInfo(surname: string): string {
  
        return this.name + " " + this.description;
    }}

    
for (var i = 1; i<= 5; i++) {
  var randomName = ngfaker.lorem.word();
  var randomDiscription = ngfaker.lorem.phrase();
  var randomPrice=ngfaker.random.number({ min: 0, max: 5000 });
  var randomDate=ngfaker.random.number({ min: 1950, max: 2020 });
  var randomAvailable=ngfaker.random.boolean();
  var randomRole= ngfaker.random.number({ min: 0, max: 3 });
  var randomQuantity= ngfaker.random.number({ min: 1, max: 15 });

database.push(
  new Book(randomName,randomDiscription, randomPrice, randomDate, randomAvailable, randomQuantity,i)
);
}
export const database1=database
export const databaseBooked1=databaseBooked
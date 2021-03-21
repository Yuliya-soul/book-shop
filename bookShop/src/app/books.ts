declare var require: any
var ngfaker = require('ng-faker');

 
var database: Book[] =  [];
var databaseBooked: Book[] =  [];


const enum Genre {
  Fiction = 'Fiction',
  NonFiction = 'NonFiction',
  Fantasy = 'Fantasy',
  Politics = 'Politics',
  Non = 'Non',
  RoleMaker = "RoleMaker"
}
/*  function RoleMaker(number: any| undefined){
   
  if((number===0)&&(number!=undefined)) return 'Fiction'
  if((number===1)&&(number!=undefined))  return 'Non—fiction'
  if ((number===2)&&(number!=undefined))  return 'Fantasy'
  if((number===3)&&(number!=undefined)) return 'Politics'
} */  
 export interface IBook {
  name: string;
  description: string;
  price: number;
  createDate: number;
  isAvailable: boolean;
  randomRole:Genre;
  quantity:number;
  id:number;
}

  export class Book implements IBook{
 
    name: string;
    description: string ;
    price: number;
    createDate: number;
    isAvailable: boolean;
    randomRole:Genre;
    quantity:number;
    id:number;
     
    constructor(
      bookName: string, 
      bookDescription: string, 
      bookPrice: number, 
      bookCreateDate: number,
      bookIsAvailable:boolean,
      bookRandomRole:Genre,
      bookQuantity:number,
      bookId:number ) 
      {
       
      this.name = bookName;
      this.description = bookDescription;
      this.price = bookPrice;
      this.createDate=bookCreateDate;
      this.isAvailable=bookIsAvailable;
      this.quantity=bookQuantity;
      this.randomRole=bookRandomRole;
      this.id=bookId;
     
    }
  
  }
   
for (var i = 1; i<= 5; i++) {
  var randomName = ngfaker.lorem.word();
  var randomDescription = ngfaker.lorem.phrase();
  var randomPrice=ngfaker.random.number({ min: 0, max: 5000 });
  var randomDate=ngfaker.random.number({ min: 1950, max: 2020 });
  var randomAvailable=ngfaker.random.boolean();
var randomRole=Genre.Politics;
//var role=RoleMaker(ngfaker.random.number({ min: 0, max: 3 }));
//var randomRole1=`Genre.${role}`;
  var randomQuantity= ngfaker.random.number({ min: 1, max: 15 });

database.push(
  new Book(
    randomName,
    randomDescription,
     randomPrice, 
     randomDate, 
     randomAvailable,
     randomRole, 
      randomQuantity,
      i)
);

}
export const database1=database
export const databaseBooked1=databaseBooked

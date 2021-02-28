const enum Genre  {
  Fiction,
  NonFiction, 
  Fantasy,
  Politics 
 
}
 
 interface IUser {
  name: string;
  description: string;
  price: number;
 // category: Genre ;
  createDate: number;
  isAvailable: boolean;
}

  export class User implements IUser{
    name: string;
    description: string ;
    price: number;
  //  category: Genre;
    createDate: number;
    isAvailable: boolean;
    
    constructor(bookName: string, bookDescription: string, bookPrice: number, bookCreateDate: number,bookIsAvailable:boolean) {
       
      this.name = bookName;
      this.description = bookDescription;
      this.price = bookPrice;
      this.createDate=bookCreateDate;
      this.isAvailable=bookIsAvailable;
     // this.category=bookCategory

    }
    getFullInfo(surname: string): string {
  
        return this.name + " " + this.description;
    }}
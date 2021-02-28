import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { User } from '../products';
declare var require: any

var ngfaker = require('ng-faker');

 var database: User[] =  [];
/* function RoleMaker(number: number){
  if (number===0) return 'Fiction'
  if (number===1) return 'Non—fiction'
  if (number===2) return 'Fantasy'
    if (number===3) return 'Politics'
}  */


function ChangeDate(date: any){
const Xmas95 = new Date(`${date}`);
const day = Xmas95.getDate();
const month=Xmas95.getMonth();
const year=Xmas95.getFullYear();
const date1= [year,month,day]

return date1
}

for (var i = 1; i<= 5; i++) {
    var randomName = ngfaker.lorem.word();
    var randomDiscription = ngfaker.lorem.phrase();
    var randomPrice=ngfaker.random.number({ min: 0, max: 5000 });
    var randomDate=ngfaker.random.number({ min: 1950, max: 2020 });
    var randomAvailable=ngfaker.random.boolean();
    var randomRole= ngfaker.random.number({ min: 0, max: 3 });
  database.push(
    new User(randomName,randomDiscription, randomPrice, randomDate, randomAvailable)
  );
}


@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.scss']
})
export class BookComponentComponent implements OnInit {

 
database = database;

buy() {
  window.alert('The product has been bought!');
}
view() {
  window.alert('The product has been viewed!');
}
ngOnInit(): void {
  throw new Error('Method not implemented.');
}

}


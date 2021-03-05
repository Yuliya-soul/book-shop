import { Component } from '@angular/core';
import { database1,databaseBooked1 } from '../app/products'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  databaseBooked=databaseBooked1
 books=database1
 items = ['item1', 'item2', 'item3', 'item4'];

 

}

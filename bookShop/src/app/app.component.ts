import { Component,ElementRef,Input, ViewChild } from '@angular/core';
import { CartService } from './services/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private cartService: CartService,

  ) { } 
  @ViewChild('viewMe', { static: false })
  viewMe?: ElementRef<HTMLElement>; 
  showMe = false;
 
  

}



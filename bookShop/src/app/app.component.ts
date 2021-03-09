import { Component,ElementRef,Input, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('viewMe', { static: false })
  viewMe?: ElementRef<HTMLElement>; 

  showMe = false;

}



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponentComponent } from './book-component/book-component.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { CartItemComponentComponent } from './cart-item-component/cart-item-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponentComponent,
    CartComponentComponent,
    CartItemComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

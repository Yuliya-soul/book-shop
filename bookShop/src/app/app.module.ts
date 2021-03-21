import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookComponentComponent } from './book-component/book-component.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { CartItemComponentComponent } from './cart-item-component/cart-item-component.component';
import { BooksListComponentComponent } from './books-list-component/books-list-component.component';
 
import { HttpClientModule }   from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    BookComponentComponent,
    CartComponentComponent,
    CartItemComponentComponent,
    BooksListComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: BookComponentComponent },
      { path: 'products/:productId', component: BooksListComponentComponent },
   
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

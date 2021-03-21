import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponentComponent } from './books-list-component/books-list-component.component';
import { CartComponentComponent } from './cart-component/cart-component.component';



import { NotFoundComponent } from './not-found.component';

const appRoutes: Routes =[
  { path: '', component: BooksListComponentComponent},
  { path: 'cart', component: CartComponentComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
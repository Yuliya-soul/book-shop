import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import {  databaseBooked1, IBook} from '../products';



@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss']
})
export class CartComponentComponent implements OnInit {
books=databaseBooked1
selectedHero?: IBook;
 


ngOnInit(): void {
  console.log('CartComponentComponent')
 }

}

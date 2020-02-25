import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../item.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Item[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
  }

  removeFromCart(item: Item) {
    this.cartService.removeFromCart(item);
  }

}

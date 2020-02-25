import { CartService } from './cart.service';
import { FeedService } from './feed.service';
import { Item } from './item.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  items: Item[] = [];

  cart: Item[] = [];

  constructor(
    private feedService: FeedService,
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.feedService.getFeed().subscribe(
      (items: Item[]) => {
        this.items = items;
      });

    this.cart = this.cartService.cart;
  }

  addToCart(item: Item): void {
    this.cartService.addToCart(item);
  }

  removeFromCart(item: Item) {
    this.cartService.removeFromCart(item);
  }

  existInCart(item): boolean {
    return this.cartService.existInCart(item);
  }

}

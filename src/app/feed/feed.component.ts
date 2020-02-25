import { Component, OnInit } from '@angular/core';
import { Item } from '../item.interface';
import { FeedService } from '../feed.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

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

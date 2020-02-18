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

  constructor(private feedService: FeedService) {
  }

  ngOnInit(): void {
    this.feedService.getFeed().subscribe(
      (items: Item[]) => {
        this.items = items;
      });
  }

  addToCart(item: Item): void {
    this.cart.push(item);
    console.log(this.cart);
  }

  removeFromCart(item: Item) {
    const index = this.cart.findIndex(x => x._id === item._id);
    this.cart.splice(index, 1);
  }

  existInCart(item): boolean {
    const index = this.cart.findIndex(x => x._id === item._id);
    return (index > -1);
  }

}

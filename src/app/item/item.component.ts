import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item.interface';
import { Router, Event, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  @Input() existInCart: boolean;

  @Output() addToCart: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() removeFromCart: EventEmitter<Item> = new EventEmitter<Item>();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  addToCartClicked(item: Item, event) {
    event.stopPropagation();
    this.addToCart.emit(item);
  }

  removeFromCartClicked(item: Item, event) {
    event.stopPropagation();
    this.removeFromCart.emit(item);
  }

  goToProduct() {
    // this.router.navigateByUrl(`/product/${this.item._id}`);
    this.router.navigate(['product', this.item._id],
      { queryParams: { min_price: 400 }
     });
  }

}

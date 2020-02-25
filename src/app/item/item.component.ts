import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item.interface';
import { Router } from '@angular/router';


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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addToCartClicked(item: Item) {
    this.addToCart.emit(item);
  }

  removeFromCartClicked(item: Item) {
    this.removeFromCart.emit(item);
  }

  goToProduct() {
    this.router.navigateByUrl(`/product/${this.item._id}`);
  }

}

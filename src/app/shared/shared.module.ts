import { ItemComponent } from './../item/item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountPipe } from '../discount.pipe';



@NgModule({
  declarations: [
    ItemComponent,
    DiscountPipe,
  ],
  exports: [
    ItemComponent,
    DiscountPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

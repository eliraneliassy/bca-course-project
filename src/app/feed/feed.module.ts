import { SharedModule } from './../shared/shared.module';
import { ItemComponent } from './../item/item.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { InfiteScrollDirective } from '../infite-scroll.directive';
import { ChangeColorDirective } from '../change-color.directive';


@NgModule({
  declarations: [
    FeedComponent,
    ProductComponent,
    InfiteScrollDirective,
    ChangeColorDirective,
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    SharedModule
  ]
})
export class FeedModule { }

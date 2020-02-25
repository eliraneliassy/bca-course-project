import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { FeedComponent } from './feed/feed.component';
import { ProductComponent } from './product/product.component';
import { ChangeColorDirective } from './change-color.directive';
import { InfiteScrollDirective } from './infite-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CartComponent,
    HeaderComponent,
    FeedComponent,
    ProductComponent,
    ChangeColorDirective,
    InfiteScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

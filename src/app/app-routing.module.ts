import { ProductResolveService } from './product-resolve.service';
import { ProductComponent } from './product/product.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FeedComponent } from './feed/feed.component';


const routes: Routes = [
  { path: '', redirectTo: 'feed', pathMatch: 'full' },
  { path: 'feed', component: FeedComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'product/:id',
    component: ProductComponent,
    resolve: { product: ProductResolveService }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

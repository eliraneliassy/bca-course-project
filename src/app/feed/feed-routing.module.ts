import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed.component';
import { ProductResolveService } from '../product-resolve.service';


const routes: Routes = [
  { path: '', component: FeedComponent },
  {
    path: 'product/:id',
    component: ProductComponent,
    resolve: { product: ProductResolveService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule { }

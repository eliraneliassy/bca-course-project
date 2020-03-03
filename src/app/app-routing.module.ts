import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductResolveService } from './product-resolve.service';
import { ProductComponent } from './product/product.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FeedComponent } from './feed/feed.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'feed', component: FeedComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookShopComponent } from './pages/book-shop/book-shop.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
      path: '',
      component: BookShopComponent
  },
  {
    path: 'cart',
    component: ShoppingCartComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

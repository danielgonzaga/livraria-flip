import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BookShopComponent } from './book-shop/book-shop.component';
import { BookCardComponent } from './book-shop/components/book-card/book-card.component';
import { IconsModule } from '../icons/icons.module';
import { SharedModule } from '../shared/shared.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './shopping-cart/components/shopping-cart-item/shopping-cart-item.component';



@NgModule({
  declarations: [
    BookShopComponent,
    BookCardComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    IconsModule,
    SharedModule
  ],
  exports: [
    BookShopComponent,
    BookCardComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent
  ]
})
export class PagesModule { }

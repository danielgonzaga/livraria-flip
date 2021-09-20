import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SharedMessengerService } from 'src/app/shared/services/shared-messenger.service';
import { IBook } from '../book-shop/models/book-shop.model';
import { BookMessengerService } from '../services/book-messenger.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: IBook[] = [];
  totalPrice: number = 0;
  private destroy$ = new Subject<boolean>();

  constructor(private messenger: BookMessengerService, private sharedService: SharedMessengerService) { }

  ngOnInit(): void {
    this.addBookToCart();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

  private addBookToCart() {
    this.messenger.getMessage().pipe(
      takeUntil(this.destroy$)
    ).subscribe(message => {
      console.log("!!!");
      let count: number = 0;
      this.totalPrice = 0;
      this.cartItems.push(message);
      this.cartItems = this.groupBooksById(this.cartItems).filter(item => item.qty !== 0);

      this.cartItems.forEach((item) => {
        count += item.qty;
        this.totalPrice += item.price * item.qty;
      })

      this.sharedService.sendMessage(count);
    })
  }

  private groupBooksById(arr: any) {
    return [...arr.reduce((r: any, o: any) => {
      const key = o.id;
      const item = r.get(key) || Object.assign({}, o, {
        qty: 0,
      });
      item.qty += o.qty;
      return r.set(key, item);
    }, new Map).values()];
  }

  qtyUpdate(event: any) {
    this.cartItems.forEach((item, index) => {
      if(item.id === event.book.id) {
          let newObj = {...event.book};
          newObj.qty = event.value;
          this.messenger.sendMessage(newObj);
      }
    })
  }

}

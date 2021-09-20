import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IBook } from 'src/app/pages/book-shop/models/book-shop.model';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() book: IBook;
  @Output() qtyUpdate: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  bookValueChange(value: number) {
    this.qtyUpdate.emit({value: value, book: this.book});
  }

  removeAll() {
    this.qtyUpdate.emit({value: -this.book.qty, book: this.book});
  }

}

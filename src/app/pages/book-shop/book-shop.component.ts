import { Component, OnInit } from '@angular/core';

import { BookShopService } from '../services/book-shop.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { IBook } from './models/book-shop.model';
import { BookMessengerService } from '../services/book-messenger.service';
import { SharedMessengerService } from 'src/app/shared/services/shared-messenger.service';

@Component({
  selector: 'app-book-shop',
  templateUrl: './book-shop.component.html',
  styleUrls: ['./book-shop.component.css']
})
export class BookShopComponent implements OnInit {

  private destroy$ = new Subject<boolean>();
  private counter: number = 0;
  bookList: IBook[] = [];

  constructor(private bookShopService: BookShopService, private sharedMessenger: SharedMessengerService) { }

  ngOnInit(): void {
    this.bookShopService.listBooks()
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe(books => {
        this.bookList = books;
    })

    this.sharedMessenger.getMessage().pipe(
      takeUntil(this.destroy$)
    ).subscribe(number => {
      this.counter = number;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

  counterChange() {
    this.counter++;
    this.sharedMessenger.sendMessage(this.counter);
  }

}

import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { IBook } from '../book-shop/models/book-shop.model';

@Injectable({
  providedIn: 'root'
})
export class BookMessengerService {

  private message$ = new ReplaySubject<IBook>();

  constructor() { }

  sendMessage(book: IBook) {
    this.message$.next(book);
  }

  getMessage() {
    return this.message$.asObservable();
  }
}

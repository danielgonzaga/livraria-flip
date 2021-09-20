import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from '../book-shop/models/book-shop.model';

@Injectable({
  providedIn: 'root'
})
export class BookShopService {

  private readonly API = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  listBooks() {
    return this.http.get<IBook[]>(this.API + "/books");
  }
}

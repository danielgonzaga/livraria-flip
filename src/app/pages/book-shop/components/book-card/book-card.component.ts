import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookMessengerService } from 'src/app/pages/services/book-messenger.service';
import { SharedMessengerService } from 'src/app/shared/services/shared-messenger.service';
import { IBook } from '../../models/book-shop.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() item: IBook;
  @Output() counterChange = new EventEmitter();

  constructor(private messenger: BookMessengerService, private sharedService: SharedMessengerService) { }

  ngOnInit(): void {
  }

  handleBookAdd() {
    this.messenger.sendMessage(this.item);
    this.counterChange.emit();
  }

}

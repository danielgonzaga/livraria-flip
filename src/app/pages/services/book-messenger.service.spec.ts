import { TestBed } from '@angular/core/testing';

import { BookMessengerService } from './book-messenger.service';

describe('BookMessengerService', () => {
  let service: BookMessengerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookMessengerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

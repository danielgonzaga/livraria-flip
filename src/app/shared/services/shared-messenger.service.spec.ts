import { TestBed } from '@angular/core/testing';

import { SharedMessengerService } from './shared-messenger.service';

describe('SharedMessengerService', () => {
  let service: SharedMessengerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedMessengerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

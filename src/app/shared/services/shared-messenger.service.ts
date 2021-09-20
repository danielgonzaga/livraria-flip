import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedMessengerService {

  private message$ = new BehaviorSubject<number>(0);

  constructor() { }

  sendMessage(msg: any) {
    this.message$.next(msg);
  }

  getMessage() {
    return this.message$.asObservable();
  }
}

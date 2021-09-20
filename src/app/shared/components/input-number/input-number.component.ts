import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {

  @Input() value: number = 1;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  increase() {
    const value = 1;
    this.valueChange.emit(value);
  }

  decrease() {
    if(this.value > 0) {
      const value = -1;
      this.valueChange.emit(value);
    }
  }

}

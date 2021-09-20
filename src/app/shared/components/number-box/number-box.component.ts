import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-box',
  templateUrl: './number-box.component.html',
  styleUrls: ['./number-box.component.css']
})
export class NumberBoxComponent implements OnInit {

  @Input() number: number;

  constructor() { }

  ngOnInit(): void {
  }

}

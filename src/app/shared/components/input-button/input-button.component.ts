import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.css']
})
export class InputButtonComponent implements OnInit {

  @Input() label: string;
  @Input() icon: string;
  @Input() transparent: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

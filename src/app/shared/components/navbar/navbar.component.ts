import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedMessengerService } from '../../services/shared-messenger.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() qty: number = 0;

  constructor(private router: Router, private sharedMessenger: SharedMessengerService) { }

  ngOnInit(): void {
    this.sharedMessenger.getMessage().subscribe(qty => {
      this.qty = qty;
    })
  }

  goToCart() {
    this.router.navigateByUrl('/cart');
  }

  goToBooksList() {
    this.router.navigateByUrl('/');
  }

}

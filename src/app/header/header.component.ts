import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showBuyNowDialog = false;

  constructor() { }

  ngOnInit() {
  }

  openBuyNowDialog() {
    this.showBuyNowDialog = true;
  }

  closeBuyNowDialog() {
    this.showBuyNowDialog = false;
  }
}

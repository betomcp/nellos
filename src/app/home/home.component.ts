import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    './home.component-2.scss',
    './responsive-scss/home-mobile.component.scss',
    './responsive-scss/home-mobile-2.component.scss'
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

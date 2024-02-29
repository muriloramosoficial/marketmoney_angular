import { Component, OnInit } from '@angular/core';
import { Header_menuComponent } from './header_menu/header_menu.component';
import { Currency_selectorComponent } from './currency_selector/currency_selector.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header_menuComponent, Currency_selectorComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

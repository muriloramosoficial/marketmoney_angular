import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Header_menuComponent } from './header_menu/header_menu.component';
import { Currency_selectorComponent } from './currency_selector/currency_selector.component';
import { ChartComponent } from './chart/chart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header_menuComponent, Currency_selectorComponent, ChartComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    const script = this.renderer.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.text = `
    {
        "container_id": "basic-area-chart-demo",
       
        "autosize": true,
        "symbol": "AAPL",
        "interval": "D",
        "timezone": "exchange",
        "theme": "light",
        "style": "3",
        "hide_top_toolbar": true,
        "save_image": false,
        "locale": "en"
    }
  `;
    this.renderer.appendChild(this.el.nativeElement, script);
  }
}

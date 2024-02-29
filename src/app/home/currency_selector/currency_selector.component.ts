import { Component, OnInit } from '@angular/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import 'flag-icons/css/flag-icons.min.css';

@Component({
  selector: 'app-currency_selector',
  standalone: true,
  imports: [
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './currency_selector.component.html',
  styleUrls: ['./currency_selector.component.css'],
})
export class Currency_selectorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  myControl() {}
}

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Currency_selectorComponent } from './currency_selector.component';

describe('Currency_selectorComponent', () => {
  let component: Currency_selectorComponent;
  let fixture: ComponentFixture<Currency_selectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Currency_selectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Currency_selectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

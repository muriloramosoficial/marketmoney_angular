/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Header_menuComponent } from './header_menu.component';

describe('Header_menuComponent', () => {
  let component: Header_menuComponent;
  let fixture: ComponentFixture<Header_menuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Header_menuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Header_menuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

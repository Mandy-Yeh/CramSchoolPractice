import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C01Component } from './c01.component';

describe('C01Component', () => {
  let component: C01Component;
  let fixture: ComponentFixture<C01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

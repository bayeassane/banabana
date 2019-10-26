import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoumaComponent } from './louma.component';

describe('LoumaComponent', () => {
  let component: LoumaComponent;
  let fixture: ComponentFixture<LoumaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoumaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

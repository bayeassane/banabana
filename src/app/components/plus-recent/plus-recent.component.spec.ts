import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusRecentComponent } from './plus-recent.component';

describe('PlusRecentComponent', () => {
  let component: PlusRecentComponent;
  let fixture: ComponentFixture<PlusRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

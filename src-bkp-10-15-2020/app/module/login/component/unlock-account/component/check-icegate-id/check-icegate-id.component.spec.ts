import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckIcegateIdComponent } from './check-icegate-id.component';

describe('CheckIcegateIdComponent', () => {
  let component: CheckIcegateIdComponent;
  let fixture: ComponentFixture<CheckIcegateIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckIcegateIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckIcegateIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

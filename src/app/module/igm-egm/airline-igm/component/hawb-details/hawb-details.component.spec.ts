import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HawbDetailsComponent } from './hawb-details.component';

describe('HawbDetailsComponent', () => {
  let component: HawbDetailsComponent;
  let fixture: ComponentFixture<HawbDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HawbDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HawbDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

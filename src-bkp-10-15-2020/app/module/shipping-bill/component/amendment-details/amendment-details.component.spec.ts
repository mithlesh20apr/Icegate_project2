import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmendmentDetailsComponent } from './amendment-details.component';

describe('AmendmentDetailsComponent', () => {
  let component: AmendmentDetailsComponent;
  let fixture: ComponentFixture<AmendmentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmendmentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmendmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

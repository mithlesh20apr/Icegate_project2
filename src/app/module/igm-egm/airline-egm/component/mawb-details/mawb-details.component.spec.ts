import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MawbDetailsComponent } from './mawb-details.component';

describe('MawbDetailsComponent', () => {
  let component: MawbDetailsComponent;
  let fixture: ComponentFixture<MawbDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MawbDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MawbDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

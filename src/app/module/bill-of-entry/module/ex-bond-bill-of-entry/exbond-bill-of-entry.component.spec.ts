import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExbondBillOfEntryComponent } from './exbond-bill-of-entry.component';

describe('ExbondBillOfEntryComponent', () => {
  let component: ExbondBillOfEntryComponent;
  let fixture: ComponentFixture<ExbondBillOfEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExbondBillOfEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExbondBillOfEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

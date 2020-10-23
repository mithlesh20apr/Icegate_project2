import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InBondBillOfEntryComponent } from './in-bond-bill-of-entry.component';

describe('InBondBillOfEntryComponent', () => {
  let component: InBondBillOfEntryComponent;
  let fixture: ComponentFixture<InBondBillOfEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InBondBillOfEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InBondBillOfEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

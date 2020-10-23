import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBillOfEntryComponent } from './select-bill-of-entry.component';

describe('SelectBillOfEntryComponent', () => {
  let component: SelectBillOfEntryComponent;
  let fixture: ComponentFixture<SelectBillOfEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBillOfEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBillOfEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

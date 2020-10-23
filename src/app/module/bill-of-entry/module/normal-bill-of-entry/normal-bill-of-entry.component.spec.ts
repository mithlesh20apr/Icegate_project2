import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalBillOfEntryComponent } from './normal-bill-of-entry.component';

describe('NormalBillOfEntryComponent', () => {
  let component: NormalBillOfEntryComponent;
  let fixture: ComponentFixture<NormalBillOfEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalBillOfEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalBillOfEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingDetailsComponent } from './packing-details.component';

describe('PackingDetailsComponent', () => {
  let component: PackingDetailsComponent;
  let fixture: ComponentFixture<PackingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

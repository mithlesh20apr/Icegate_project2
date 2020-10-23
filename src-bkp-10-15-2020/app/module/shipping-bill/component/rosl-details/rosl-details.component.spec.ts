import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoslDetailsComponent } from './rosl-details.component';

describe('RoslDetailsComponent', () => {
  let component: RoslDetailsComponent;
  let fixture: ComponentFixture<RoslDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoslDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoslDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

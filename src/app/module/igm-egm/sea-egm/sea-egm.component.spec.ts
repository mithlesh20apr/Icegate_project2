import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaEgmComponent } from './sea-egm.component';

describe('SeaEgmComponent', () => {
  let component: SeaEgmComponent;
  let fixture: ComponentFixture<SeaEgmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaEgmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaEgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

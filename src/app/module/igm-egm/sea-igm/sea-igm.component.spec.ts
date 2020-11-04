import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaIgmComponent } from './sea-igm.component';

describe('SeaIgmComponent', () => {
  let component: SeaIgmComponent;
  let fixture: ComponentFixture<SeaIgmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaIgmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaIgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

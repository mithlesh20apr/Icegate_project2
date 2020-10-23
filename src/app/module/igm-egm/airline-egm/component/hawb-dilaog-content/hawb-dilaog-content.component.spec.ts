import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HawbDilaogContentComponent } from './hawb-dilaog-content.component';

describe('HawbDilaogContentComponent', () => {
  let component: HawbDilaogContentComponent;
  let fixture: ComponentFixture<HawbDilaogContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HawbDilaogContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HawbDilaogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

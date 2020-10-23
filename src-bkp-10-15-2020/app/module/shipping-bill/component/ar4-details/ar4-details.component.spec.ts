import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ar4DetailsComponent } from './ar4-details.component';

describe('Ar4DetailsComponent', () => {
  let component: Ar4DetailsComponent;
  let fixture: ComponentFixture<Ar4DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ar4DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ar4DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

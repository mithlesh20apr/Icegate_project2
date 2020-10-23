import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyDetailsComponent } from './third-party-details.component';

describe('ThirdPartyDetailsComponent', () => {
  let component: ThirdPartyDetailsComponent;
  let fixture: ComponentFixture<ThirdPartyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdPartyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPartyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

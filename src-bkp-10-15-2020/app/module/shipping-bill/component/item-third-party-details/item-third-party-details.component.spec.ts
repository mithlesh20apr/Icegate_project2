import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemThirdPartyDetailsComponent } from './item-third-party-details.component';

describe('ItemThirdPartyDetailsComponent', () => {
  let component: ItemThirdPartyDetailsComponent;
  let fixture: ComponentFixture<ItemThirdPartyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemThirdPartyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemThirdPartyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

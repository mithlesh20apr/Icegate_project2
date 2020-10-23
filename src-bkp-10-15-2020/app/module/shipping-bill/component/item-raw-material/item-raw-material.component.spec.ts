import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRawMaterialComponent } from './item-raw-material.component';

describe('ItemRawMaterialComponent', () => {
  let component: ItemRawMaterialComponent;
  let fixture: ComponentFixture<ItemRawMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRawMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRawMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

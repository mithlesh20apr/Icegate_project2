import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ShippingBillService } from '../../service/shipping-bill.service';

@Component({
  selector: 'app-stepper-layout',
  templateUrl: './stepper-layout.component.html',
  styleUrls: ['./stepper-layout.component.scss']
})
export class StepperLayoutComponent implements OnInit {

  tabs = [1];
  tabs1= [1];
  tabs3=[1];
  selected = new FormControl(0);
  selected1 = new FormControl(0);
  selected3 = new FormControl(0);
  disableAddButton = false;

  constructor(public _shippingBillService: ShippingBillService) { }

  ngOnInit(): void {
  }

  addTab() {
    this.tabs.push(this.tabs.length);
    this.selected.setValue(this.tabs.length);
    if(this.tabs.length == 3){
      this.disableAddButton = true;
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
    if(this.tabs.length < 3){
      this.disableAddButton = false;
    }
  }

  addTab1() {
    this.tabs1.push(this.tabs1.length);
    this.selected1.setValue(this.tabs1.length);
  }

  removeTab1(index: number) {
    this.tabs1.splice(index, 1);
  }

  addTab3() {
    this.tabs3.push(this.tabs3.length);
    this.selected3.setValue(this.tabs3.length);
  }
  removeTab3(index: number) {
    this.tabs3.splice(index, 1);
  }

  isIecAvailable(event){
    this._shippingBillService.iecAvailable.next(event.value);
  }

  isNfeiAvailable(nfeiEvent){
    this._shippingBillService.nfeiAvailable.next(nfeiEvent.value);
  }
}

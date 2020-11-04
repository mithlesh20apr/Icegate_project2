import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Step1 } from '../model/step1.model';

@Injectable({
  providedIn: 'root'
})
export class ShippingBillService {

  step1: Step1;
  iecAvailable = new Subject<any>();
  nfeiAvailable = new Subject<any>();
  
  constructor() { }

  getStep1(){
    return this.step1;
  }

  setStep1(){
    this.step1 = new Step1();
  }

}

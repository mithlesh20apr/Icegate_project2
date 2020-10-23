import { Component, OnInit,forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { ShippingBillService } from '../service/shipping-bill.service';
import {ValidatorsService} from '../../common/service/validators.service'
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step2Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step2Component),
      multi: true
    }
  ]
})
export class Step2Component implements OnInit {
  shipingBillStepTwo: FormGroup;
  disableAddButton = false;
  private formSumitAttempt: boolean;
  tabs = [1];
  tabs1= [1]; 
  tabs3=[1];
  selected = new FormControl(0);
  selected1 = new FormControl(0);
  selected3 = new FormControl(0);
  constructor(public _dialog: MatDialog,private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.shipingBillStepTwo = this._formBuilder.group({
      // invoice details
      invoice_sr_number: ['', [Validators.maxLength(2)]],
      invoice_number: ['', [Validators.required, Validators.maxLength(17)]],
      invoice_currency: ['', [Validators.required]],
      nature_of_contract: ['', [Validators.required]],
      invoice_date: ['', [Validators.required]],
      buyer_name: ['', [Validators.required, Validators.maxLength(35)]],
      buyer_address_1: ['', [Validators.required, Validators.maxLength(35)]],
      buyer_address_2: ['', [Validators.maxLength(35)]],
      buyer_address_3: ['', [Validators.maxLength(35)]],
      buyer_address_4: ['', Validators.maxLength(35)],

      // freight insurance details
      freight_currency: [''],
      freight_amount: ['', [Validators.maxLength(12), Validators.pattern("^[0-9]*$")]],
      insurance_rate: ['', [Validators.maxLength(3), Validators.pattern("^[0-9]*$")]],
      insurance_currency: [''],
      insurance_amount: ['', [Validators.maxLength(12), Validators.pattern("^[0-9]*$")]],
      commission_rate: ['', [Validators.maxLength(8), Validators.pattern("^[0-9]*$")]],
      commission_currency: [''],
      commission_amount: ['', [Validators.maxLength(12), Validators.pattern("^[0-9]*$")]],
      discount_on_fob: ['', [Validators.maxLength(8), Validators.pattern("^[0-9]*$")]],
      discount_currency: [''],
      discount_amount: ['', [Validators.maxLength(12), Validators.pattern("^[0-9]*$")]],
      other_deductions: ['', [Validators.maxLength(8), Validators.pattern("^[0-9]*$")]],
      other_deductions_currency: [''],
      other_deductions_amount: ['', [Validators.maxLength(12), Validators.pattern("^[0-9]*$")]],
      add_freight: ['', [Validators.required]],
      packing_charges: ['', [Validators.maxLength(12), Validators.pattern("^[0-9]*$")]],
      exporter_contract_number: ['', [Validators.maxLength(30)]],
      nature_of_payment: ['', [Validators.maxLength(2)]],
      period_of_payments: ['', [Validators.maxLength(3)]],
      amendment_type: ['', [Validators.maxLength(1)]],
      amendment_number: ['', [Validators.maxLength(3), Validators.pattern("^[0-9]*$")]],
      amendment_date: [''],

      // thrid party details
      iec:['',[Validators.required,Validators.maxLength(10)]],
      branch_serial_number:['',[Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9]*$")]],
      exporter_name:['',[Validators.maxLength(50),Validators.required]],
      address1:['',[Validators.maxLength(35),Validators.required]],
      address2:['',Validators.maxLength(35)],   
      city:['',[Validators.maxLength(35),Validators.required]],   
      state:['',Validators.maxLength(25)],   
      pin:['',[Validators.maxLength(6),Validators.pattern("[0-9]*$")]],
      gstn_type:['',Validators.required],
      gstn_id:['',[Validators.required,Validators.maxLength(20)]]
    });
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
  openDialog(){
    // let dialogRef = this._dialog.open(Step4Component);
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    // });
  }
   // validation code
 public onTouched: () => void = () => {

  //console.log('data');
};
writeValue(val: any): void {
  //console.log('written values')
  val && this.shipingBillStepTwo.patchValue(val, { emitEvent: true });
}
registerOnChange(fn: any): void {
  //console.log("on change");
  this.shipingBillStepTwo.valueChanges.subscribe(fn);
}
registerOnTouched(fn: any): void {
  //console.log("on blur");
  this.onTouched = fn;
}
setDisabledState?(isDisabled: boolean): void {
  isDisabled ? this.shipingBillStepTwo.disable() : this.shipingBillStepTwo.enable();
}
validate(c: AbstractControl): ValidationErrors | null {
  //console.log("Consignment Info validation", c);
  return this.shipingBillStepTwo.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
}


// check validation when you click the continue buttons
isFieldValid(field: string) {
  return (
    (!this.shipingBillStepTwo.get(field).valid && this.shipingBillStepTwo.get(field).touched) ||
    (this.shipingBillStepTwo.get(field).untouched && this.formSumitAttempt)
  );
}

displayFieldCss(field: string) {
  return {
    'has-error': this.isFieldValid(field),
    'has-feedback': this.isFieldValid(field)
  };
}

// submit on save and continue sections
onSubmit() {
  console.log(this.shipingBillStepTwo.value);

  // stepper.next();
  this.formSumitAttempt = true;
  if (this.shipingBillStepTwo.valid) {
    console.log('form submitted');
    
  } else {
    console.log('err');

  }
}
}

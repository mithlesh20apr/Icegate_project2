import { Component, OnInit,forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { ShippingBillService } from '../service/shipping-bill.service';
import {ValidatorsService} from '../../common/service/validators.service'
@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step6Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step6Component),
      multi: true
    }
  ]
})
export class Step6Component implements OnInit {
  tabs = [1];
  tabs1= [1];
  tabs3=[1];
  selected = new FormControl(0);
  selected1 = new FormControl(0);
  private formSumitAttempt: boolean;
  selected3 = new FormControl(0);
  disableAddButton = false;
  shipingBillStepSix: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.shipingBillStepSix = this._formBuilder.group({
      // Licence details bill
      invoice_sr_number:['', [Validators.maxLength(2),Validators.pattern("^[0-9]+$")]],
      item_sr_number_in_invoice:['', [Validators.maxLength(4),Validators.pattern("^[0-9]+$")]],
      sr_no:['', [Validators.maxLength(4),Validators.pattern("^[0-9]+$")]],
      registration_number:['', [Validators.required,Validators.maxLength(25), ]],
      registration_date:['',Validators.required],
      item_sr_number_part_e:['', [Validators.required,Validators.maxLength(10), ]],
      item_sr_number_part_c:['', [Validators.required,Validators.maxLength(10), ]],
      quantity:['', [Validators.maxLength(13),Validators.pattern("^[0-9]+$")]],
      export_quantity:['', [Validators.required,Validators.maxLength(13),Validators.pattern("^[0-9]+$")]],
      whether_indigenous_imported:['', [Validators.required,Validators.maxLength(1), ]],
      amendment_type:['', [Validators.maxLength(1), ]],
      amendment_no:['', [Validators.maxLength(7), Validators.pattern("^[0-9]+$")]],
      amendment_date:['', ],
      // Dfia details
      sion_group_code:['', [Validators.required,Validators.maxLength(3), ]],
      sion_sr_number:['', [Validators.required,Validators.maxLength(8), ]],
      sion_io_norm_sr_number:['', [Validators.required,Validators.maxLength(8), ]],
      dfia_quantity:['', [Validators.required,Validators.maxLength(13),Validators.pattern("^[0-9]+$")]],
      unit_of_measurement:['', [Validators.required,Validators.maxLength(3), ]],
      item_description:['', [Validators.maxLength(120), ]],
      technical_characteristics:['', [Validators.maxLength(250), ]],
      file_number:['', [Validators.required,Validators.maxLength(25), ]],
      license_number:['', [Validators.maxLength(10), ]],
      // Job work details
      be_number: ['', [Validators.required, Validators.maxLength(7), Validators.pattern("^[0-9]+$")]],
      be_date: ['', [Validators.required]],
      be_invoice_serial_number: ['', [Validators.required, Validators.maxLength(2), Validators.pattern("^[0-9]+$")]],
      be_invoice_number: ['', [Validators.required, Validators.maxLength(16), ]],
      be_item_number: ['', [Validators.required, Validators.maxLength(4), Validators.pattern("^[0-9]+$")]],
      be_port_code: ['', [Validators.required, Validators.maxLength(6), ]],
      be_qty_used: ['', [Validators.required, Validators.maxLength(14), Validators.pattern("^[0-9]+$")]],
      qty_units: ['', [Validators.required, Validators.maxLength(3), ]],
  });
  }

  addTab1() {
    this.tabs1.push(this.tabs1.length);
    this.selected1.setValue(this.tabs1.length);
  }
  removeTab1(index: number) {
    this.tabs1.splice(index, 1);
  }
   // validation code
 public onTouched: () => void = () => {

  //console.log('data');
};
writeValue(val: any): void {
  //console.log('written values')
  val && this.shipingBillStepSix.patchValue(val, { emitEvent: true });
}
registerOnChange(fn: any): void {
  //console.log("on change");
  this.shipingBillStepSix.valueChanges.subscribe(fn);
}
registerOnTouched(fn: any): void {
  //console.log("on blur");
  this.onTouched = fn;
}
setDisabledState?(isDisabled: boolean): void {
  isDisabled ? this.shipingBillStepSix.disable() : this.shipingBillStepSix.enable();
}
validate(c: AbstractControl): ValidationErrors | null {
  //console.log("Consignment Info validation", c);
  return this.shipingBillStepSix.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
}


// check validation when you click the continue buttons
isFieldValid(field: string) {
  return (
    (!this.shipingBillStepSix.get(field).valid && this.shipingBillStepSix.get(field).touched) ||
    (this.shipingBillStepSix.get(field).untouched && this.formSumitAttempt)
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
  console.log(this.shipingBillStepSix.value);

  // stepper.next();
  this.formSumitAttempt = true;
  if (this.shipingBillStepSix.valid) {
    console.log('form submitted');
    
  } else {
    console.log('err');

  }
}
}

import { Component, OnInit,forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { ShippingBillService } from '../service/shipping-bill.service';
import {ValidatorsService} from '../../common/service/validators.service'
@Component({
  selector: 'app-step7',
  templateUrl: './step7.component.html',
  styleUrls: ['./step7.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step7Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step7Component),
      multi: true
    }
  ]
})
export class Step7Component implements OnInit {

  shipingBillStepSeven:FormGroup;
  private formSumitAttempt: boolean;
  constructor( private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.shipingBillStepSeven=this._formBuilder.group({
      // Ar4 details 
      invoice_sr_number:['',[Validators.maxLength(2),Validators.pattern("[0-9]*$")]],
      item_sr_number_invoice:['',[Validators.maxLength(4),Validators.pattern("[0-9]*$")]],
      ar4_number:['',[Validators.required,Validators.maxLength(17)]],
      ar4_date:['',Validators.required],
      commissionerate:['',[Validators.required,Validators.maxLength(20)]],
      division:['',[Validators.required,Validators.maxLength(20)]],
      range:['',[Validators.required, Validators.maxLength(20)]],
      remarks:['',Validators.maxLength(250)],

      // Packing details
      packing_number_from:['',[Validators.required,Validators.maxLength(5),Validators.pattern("[0-9]*$")]],
      packing_number_to:['',[Validators.required,Validators.maxLength(5),Validators.pattern("[0-9]*$")]],
      packing_code:['',[Validators.required,Validators.maxLength(3)]],
      rotation_date:['',Validators.required],
      rotation_number:['',[Validators.required,Validators.maxLength(7),Validators.pattern("[0-9]*$")]],
      factory_stuffed:['',Validators.required],
      sample_accompanied:['',Validators.required],

      // Container details
      container_number:['',Validators.maxLength(15)],
      container_size:['',[Validators.required,Validators.maxLength(4)]],
      excise_seal_number:['',Validators.maxLength(35)],
      seal_date:[''],
      seal_type_indicator:['',Validators.required],
      seal_device_id:['',Validators.maxLength(35)],
      movement_document_type:['',Validators.maxLength(5)],
      movement_document_number:['',Validators.maxLength(35)],
      eqmnt_type:['',[Validators.required,Validators.maxLength(3)]],
      eqmnt_qty:['',[Validators.maxLength(8),Validators.pattern("[0-9]*$")]],
      eqmnt_qty_code:['',Validators.maxLength(3)],
    })
  }
// validation code
public onTouched: () => void = () => {

  //console.log('data');
};
writeValue(val: any): void {
  //console.log('written values')
  val && this.shipingBillStepSeven.patchValue(val, { emitEvent: true });
}
registerOnChange(fn: any): void {
  //console.log("on change");
  this.shipingBillStepSeven.valueChanges.subscribe(fn);
}
registerOnTouched(fn: any): void {
  //console.log("on blur");
  this.onTouched = fn;
}
setDisabledState?(isDisabled: boolean): void {
  isDisabled ? this.shipingBillStepSeven.disable() : this.shipingBillStepSeven.enable();
}
validate(c: AbstractControl): ValidationErrors | null {
  //console.log("Consignment Info validation", c);
  return this.shipingBillStepSeven.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
}


// check validation when you click the continue buttons
isFieldValid(field: string) {
  return (
    (!this.shipingBillStepSeven.get(field).valid && this.shipingBillStepSeven.get(field).touched) ||
    (this.shipingBillStepSeven.get(field).untouched && this.formSumitAttempt)
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
  console.log(this.shipingBillStepSeven.value);

  // stepper.next();
  this.formSumitAttempt = true;
  if (this.shipingBillStepSeven.valid) {
    console.log('form submitted');
    
  } else {
    console.log('err');

  }
}

}

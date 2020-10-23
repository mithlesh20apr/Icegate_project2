import { Component, OnInit,forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { ShippingBillService } from '../service/shipping-bill.service';
import {ValidatorsService} from '../../common/service/validators.service'

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step4Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step4Component),
      multi: true
    }
  ]
})
export class Step4Component implements OnInit {
  shippingBillstepFour: FormGroup;
  private formSumitAttempt: boolean;
  tabs1 = [0];
  selected = new FormControl(0);
  disableAdd1Button = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.shippingBillstepFour = this._formBuilder.group({
      invoice_sr_number: ['', [Validators.maxLength(2), Validators.pattern("^[0-9]+$")]],
      item_sr_number_in_invoice: ['', [Validators.maxLength(4), Validators.pattern("^[0-9]+$")]],
      scheme_code: ['', [Validators.required,Validators.maxLength(2), ]],
      ritc_code: ['', [Validators.required,Validators.maxLength(8), ]],
      description_of_the_goods_1: ['',[Validators.required,Validators.maxLength(40), ]],
      description_of_the_goods_2: ['', [Validators.maxLength(40), ]],
      description_of_the_goods_3: ['', [Validators.maxLength(40), ]],
      unit_of_measurement: ['', [Validators.required, Validators.maxLength(3), ]],
      quantity: ['', [Validators.required,Validators.maxLength(11), Validators.pattern("^[0-9]+$")]],
      unit_price:['', [Validators.required,Validators.maxLength(16), Validators.pattern("^[0-9]+$")]],
      unit_of_rate:['', [Validators.required, Validators.maxLength(3), ]],
      no_of_unit:['', [Validators.required, Validators.maxLength(8), Validators.pattern("^[0-9]+$")]],
      present_market_value:['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[0-9]+$")]],
      job_work_notification:['', [ Validators.maxLength(10), ]],
      third_party:['', [Validators.maxLength(1), ]],
      reward_item:['', [Validators.required, Validators.maxLength(1), ]],
      amendment_type: ['', [Validators.maxLength(1), ]],
      amendment_no: ['', [Validators.maxLength(7), Validators.pattern("^[0-9]+$")]],
      amendment_date: ['',],
      szzzza:['', [Validators.maxLength(1), ]],
      item_manufacturer_code:['', [Validators.maxLength(17), ]],
      item_manufacturer_type_address1:['', [Validators.maxLength(70), ]],
      item_manufacturer_type_address2:['', [Validators.maxLength(50), ]],
      item_manufacturer_type_city:['', [Validators.maxLength(35), ]],
      item_manufacturer_type_subdivision:['', [Validators.maxLength(35), ]],
      item_manufacturer_type_pin:['', [Validators.maxLength(10), ]],
      item_manufacturer_type_country:['', [Validators.maxLength(2), ]],
      source_state:['', [Validators.maxLength(2), ]],
      transit_country:['', [Validators.maxLength(2), ]],
      accessory_status:['', [Validators.maxLength(1), ]],
      end_use_of_item:['', [Validators.required, Validators.maxLength(20), ]],
      hawb_no:['', [Validators.maxLength(15), ]],
      total_package:['', [Validators.maxLength(8), Validators.pattern("^[0-9]+$")]],
      igst_payment_status:['', [Validators.required, Validators.maxLength(3), ]],
      taxable_value:['', [Validators.maxLength(16), Validators.pattern("^[0-9]+$")]],
      igst_amount:['', [Validators.maxLength(16), Validators.pattern("^[0-9]+$")]],

      // accessories validations part
      description:['',[Validators.required,Validators.maxLength(500)]],
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
      gstn_id:['',[Validators.required,Validators.maxLength(20)]],
      srno: ['', [Validators.maxLength(2), Validators.pattern("[0-9]*$")]],
      cess_act_code:['',[Validators.required,Validators.maxLength(10)]],
      ces_quantity: ['', [Validators.maxLength(11), Validators.pattern("[0-9]*$")]],
      // Draw back validations
      dbk_schedule_number: ['', [Validators.required,Validators.maxLength(15)]],
      drawback_quantity:['', [Validators.maxLength(11), Validators.pattern("[0-9]*$")]],
      // Raw Materials
      raw_material_code: ['', [Validators.required,Validators.maxLength(2), Validators.pattern("[0-9]*$")]],
      row_material_quantity: ['', [Validators.required,Validators.maxLength(13), Validators.pattern("[0-9]*$")]],

  });
  }

  addTab1() {
    this.tabs1.push(this.tabs1.length);
    this.selected.setValue(this.tabs1.length);
    if(this.tabs1.length == 10){
      this.disableAdd1Button = true;
    }
  }

  removeTab1(index: number) {
    this.tabs1.splice(index, 1);
    if(this.tabs1.length < 10){
      this.disableAdd1Button = false;
    }
  }
 // validation code
 public onTouched: () => void = () => {

  //console.log('data');
};
writeValue(val: any): void {
  //console.log('written values')
  val && this.shippingBillstepFour.patchValue(val, { emitEvent: true });
}
registerOnChange(fn: any): void {
  //console.log("on change");
  this.shippingBillstepFour.valueChanges.subscribe(fn);
}
registerOnTouched(fn: any): void {
  //console.log("on blur");
  this.onTouched = fn;
}
setDisabledState?(isDisabled: boolean): void {
  isDisabled ? this.shippingBillstepFour.disable() : this.shippingBillstepFour.enable();
}
validate(c: AbstractControl): ValidationErrors | null {
  //console.log("Consignment Info validation", c);
  return this.shippingBillstepFour.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
}


// check validation when you click the continue buttons
isFieldValid(field: string) {
  return (
    (!this.shippingBillstepFour.get(field).valid && this.shippingBillstepFour.get(field).touched) ||
    (this.shippingBillstepFour.get(field).untouched && this.formSumitAttempt)
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
  console.log(this.shippingBillstepFour.value);

  // stepper.next();
  this.formSumitAttempt = true;
  if (this.shippingBillstepFour.valid) {
    console.log('form submitted');
    
  } else {
    console.log('err');

  }
}

}

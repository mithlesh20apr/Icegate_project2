import { Component, forwardRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service'
@Component({
  selector: 'app-step9',
  templateUrl: './step9.component.html',
  styleUrls: ['./step9.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step9Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step9Component),
      multi: true
    }
  ]  
})
export class Step9Component implements OnInit {
  panelOpenState = false;
  isLinear = false;
  inBondFormStep9: FormGroup;
  private formSumitAttempt: boolean;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inBondFormStep9 = this._formBuilder.group({
      igm_no: ['', [Validators.required, Validators.maxLength(7), ValidatorsService.numberValidator]],
      igm_date: ['', Validators.required],
      inward_date: ['', Validators.required],
      gateway_igm_number: ['', [Validators.maxLength(5), ValidatorsService.numberValidator]],
      gateway_igm_date: [''],
      gateway_port_code: ['', [Validators.maxLength(6)]],
      gross_weight:['',[Validators.maxLength(12),ValidatorsService.numberValidator]],
      mawb_bl_no: ['', [Validators.required, Validators.maxLength(20)]],
      mawb_bl_date: ['', Validators.required],
      hawb_hbl_no: ['', [Validators.maxLength(20), ValidatorsService.numberValidator]],
      hawb_hbl_date: [''],
      total_number_of_packages: ['', [Validators.required, Validators.maxLength(8), ValidatorsService.numberValidator]],
      marks_number1: ['', [Validators.required, Validators.maxLength(40), ]],
      marks_number2: ['', [Validators.maxLength(40)]],
      marks_number3: ['', [Validators.maxLength(40)]],
      unit_quantity_code:['',[Validators.required,Validators.maxLength(3)]],
      package_code:['',[Validators.maxLength(3),,Validators.required]],
    })
  }

   // validation code
 public onTouched: () => void = () => {

  //console.log('data');
};
writeValue(val: any): void {
  //console.log('written values')
  val && this.inBondFormStep9.patchValue(val, { emitEvent: true });
}
registerOnChange(fn: any): void {
  //console.log("on change");
  this.inBondFormStep9.valueChanges.subscribe(fn);
}
registerOnTouched(fn: any): void {
  //console.log("on blur");
  this.onTouched = fn;
}
setDisabledState?(isDisabled: boolean): void {
  isDisabled ? this.inBondFormStep9.disable() : this.inBondFormStep9.enable();
}
validate(c: AbstractControl): ValidationErrors | null {
  //console.log("Consignment Info validation", c);
  return this.inBondFormStep9.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
}
 // check validation when you click the continue buttons
 isFieldValid(field: string) {
  return (
    (!this.inBondFormStep9.get(field).valid && this.inBondFormStep9.get(field).touched) ||
    (this.inBondFormStep9.get(field).untouched && this.formSumitAttempt)
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


  // stepper.next();
   this.formSumitAttempt = true;
   if (this.inBondFormStep9.valid) {
     console.log('form submitted');
     
   }else{
     console.log('err');
   }
}


}

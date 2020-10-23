import{ Component, OnInit, Input,forwardRef } from '@angular/core';
import { FormGroup,FormControl, Validator, FormBuilder,Validators,ControlValueAccessor,NG_VALUE_ACCESSOR, NG_VALIDATORS,AbstractControl, ValidationErrors } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service';
@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.css'],
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
export class Step6Component implements OnInit,OnInit,ControlValueAccessor,Validator {
  panelOpenState = false;
  isLinear = false;
  inBondFormStep6: FormGroup
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inBondFormStep6 = this._formBuilder.group({
      invoice_serial_number:['',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]],
      item_serial_number: ['', [Validators.required, Validators.maxLength(4), Validators.pattern("[0-9]+$")]],
      item_serial_number_invoice: ['', [Validators.required, Validators.maxLength(4), Validators.pattern("[0-9]+$")]],
      item_serial_number_rsp: ['', [Validators.maxLength(16), Validators.pattern("[0-9]+$")]],
      rsp: ['', [Validators.required, Validators.maxLength(16), Validators.pattern("[0-9]+$")]],
      quantity: ['', [Validators.required, Validators.maxLength(16), Validators.pattern("[0-9]+$")]],
      description: ['', [Validators.required, Validators.maxLength(40), Validators.pattern("^[0-9a-zA-Z]+$")]],
      rsp_notification: ['', [Validators.maxLength(10), Validators.pattern("^[0-9a-zA-Z]+$")]],
      rsp_notification_sr_no: ['', [Validators.maxLength(10), Validators.pattern("^[0-9a-zA-Z]+$")]],
    })
  }
 // communication between part to child compoentent code for form data saving in main in-bound-bill-of-entry part code
 
 public onTouched: () => void = () => {

  //console.log('data');
};
writeValue(val: any): void {
  //console.log('written values')
  val && this.inBondFormStep6.setValue(val, { emitEvent: false });
}
registerOnChange(fn: any): void {
  //console.log("on change");
  this.inBondFormStep6.valueChanges.subscribe(fn);
}
registerOnTouched(fn: any): void {
 //console.log("on blur");
  this.onTouched = fn;
}
setDisabledState?(isDisabled: boolean): void {
  isDisabled ? this.inBondFormStep6.disable() : this.inBondFormStep6.enable();
}
validate(c: AbstractControl): ValidationErrors | null{
 // console.log("Consignment Info validation", c);
  return this.inBondFormStep6.valid ? null : { invalidForm: {valid: false, message: "Step1 fields are invalid"}};
}
}

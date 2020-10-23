import { Component, OnInit,Input,forwardRef  } from '@angular/core';
import { FormGroup,FormControl, Validator, FormBuilder,Validators,ControlValueAccessor,NG_VALUE_ACCESSOR, NG_VALIDATORS,AbstractControl, ValidationErrors } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service';
@Component({
  selector: 'app-step7',
  templateUrl: './step7.component.html',
  styleUrls: ['./step7.component.css'],
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
export class Step7Component implements OnInit,ControlValueAccessor,Validator {
 
  panelOpenState = false;
  isLinear = false;
  inBondFormStep7: FormGroup
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inBondFormStep7=this._formBuilder.group({
      invoice_serial_number:['',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]],
      item_serial_number_invoice: ['', [Validators.required, Validators.maxLength(4), Validators.pattern("[0-9]+$")]],
      bcd_notification:['',[Validators.required,Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      bcd_notification_sr_no: ['',[Validators.required,Validators.maxLength(10),Validators.pattern("^[0-9a-zA-Z]+$")]],
      exemption_required:['',[Validators.maxLength(1),Validators.pattern("^[0-9a-zA-Z]+$")]]
    })
  }
// communication between part to child compoentent code for form data saving in main in-bound-bill-of-entry part code
 
public onTouched: () => void = () => {

  //console.log('data');
};
writeValue(val: any): void {
  //console.log('written values')
  val && this.inBondFormStep7.setValue(val, { emitEvent: false });
}
registerOnChange(fn: any): void {
  //console.log("on change");
  this.inBondFormStep7.valueChanges.subscribe(fn);
}
registerOnTouched(fn: any): void {
 //console.log("on blur");
  this.onTouched = fn;
}
setDisabledState?(isDisabled: boolean): void {
  isDisabled ? this.inBondFormStep7.disable() : this.inBondFormStep7.enable();
}
validate(c: AbstractControl): ValidationErrors | null{
 // console.log("Consignment Info validation", c);
  return this.inBondFormStep7.valid ? null : { invalidForm: {valid: false, message: "Step1 fields are invalid"}};
}
}

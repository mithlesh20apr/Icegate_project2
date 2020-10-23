import { Component, OnInit,ViewChild,Input,forwardRef,Output,EventEmitter } from '@angular/core';
import { FormGroup,FormControl, Validator, FormBuilder,Validators,ControlValueAccessor,NG_VALUE_ACCESSOR, NG_VALIDATORS,AbstractControl, ValidationErrors } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service';
@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css'],
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
export class Step4Component implements OnInit,ControlValueAccessor,Validator {
  panelOpenState = false;
  isLinear = false;
  @Input() index: number;
  inBondFormStep4: FormGroup
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.inBondFormStep4=this._formBuilder.group({
      invoice_serial_number:['',[Validators.required,Validators.maxLength(5)]],
      misc_charge_code:['',[Validators.required,Validators.maxLength(2)]],
      misc_description:['',[Validators.required,Validators.maxLength(35)]],
      misc_charges:['',[Validators.maxLength(10),ValidatorsService.numberValidator]],
      misc_rate:['',[Validators.maxLength(3),ValidatorsService.numberValidator]]
    })
  }
  public onTouched: () => void = () => {};


  writeValue(val: any): void {
  //  console.log(val);
    val && this.inBondFormStep4.patchValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
  //  console.log("on change");
    this.inBondFormStep4.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
  //  console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.inBondFormStep4.disable() : this.inBondFormStep4.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null{
    //console.log("Consignment Info validation", c);
    return this.inBondFormStep4.valid ? null : { invalidForm: {valid: false, message: "Step4 fields are invalid"}};
  }

}

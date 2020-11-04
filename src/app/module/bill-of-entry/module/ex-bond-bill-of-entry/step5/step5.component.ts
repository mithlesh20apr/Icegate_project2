import { Component, ElementRef, forwardRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import Swal from 'sweetalert2';
import {ValidatorsService} from '../../../../common/service/validators.service';
@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step5Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step5Component),
      multi: true
    }
  ]  
})
export class Step5Component implements OnInit {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  panelOpenState = false;
  isLinear = false;
  exBondFormStep5: FormGroup;
  private formSumitAttempt: boolean;
  
  constructor(private _formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.exBondFormStep5= this._formBuilder.group({
      invoice_serial_number:['',[Validators.required,Validators.maxLength(5),ValidatorsService.numberValidator]],
      item_serial_number_invoice: ['', [Validators.required, Validators.maxLength(4),ValidatorsService.numberValidator ]],
      bcd_notification:['',[Validators.required,Validators.maxLength(10)]],
      bcd_notification_sr_no: ['',[Validators.required,Validators.maxLength(10)]],
      excemption_required:['']
    })
  }
   // validation code
 public onTouched: () => void = () => {

  //console.log('data');
};
writeValue(val: any): void {
  //console.log('written values')
  val && this.exBondFormStep5.patchValue(val, { emitEvent: true });
}
registerOnChange(fn: any): void {
  //console.log("on change");
  this.exBondFormStep5.valueChanges.subscribe(fn);
}
registerOnTouched(fn: any): void {
  //console.log("on blur");
  this.onTouched = fn;
}
setDisabledState?(isDisabled: boolean): void {
  isDisabled ? this.exBondFormStep5.disable() : this.exBondFormStep5.enable();
}
validate(c: AbstractControl): ValidationErrors | null {
  //console.log("Consignment Info validation", c);
  return this.exBondFormStep5.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
}
  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    return (
      (!this.exBondFormStep5.get(field).valid && this.exBondFormStep5.get(field).touched) ||
      (this.exBondFormStep5.get(field).untouched && this.formSumitAttempt)
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


    if (this.exBondFormStep5.valid === true) {
      this.exBondFormStep5.value
      Swal.fire({
        title: 'Step 5 completed',
        text: "Please click next for other step or click cancel",
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Next &nbsp; &#8594;'
      }).then((result) => {
        if (result.isConfirmed) {
          let element:HTMLElement = document.getElementById('save_continues') as HTMLElement;
          element.click();
        }
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Required Validation is left. Please check',
      }).then((result) =>{
        this.formSumitAttempt = true
      })

    }

  }
}

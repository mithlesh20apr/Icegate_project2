import { Component, OnInit,forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms'; 
import { ValidatorsService } from '../../../../common/service/validators.service';
import Swal from 'sweetalert2';
import {TooltipPosition} from '@angular/material/tooltip';
@Component({
  selector: 'app-step8',
  templateUrl: './step8.component.html',
  styleUrls: ['./step8.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step8Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step8Component),
      multi: true
    }
  ]
})
export class Step8Component implements OnInit {

  panelOpenState = false;
  isLinear = false;
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  homeConsumptionFormStep8: FormGroup
  private formSumitAttempt:boolean
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.homeConsumptionFormStep8 = this._formBuilder.group({
      bond_number: ['', [Validators.required,Validators.maxLength(10), ValidatorsService.numberValidator]],
      bond_port: ['', [Validators.required,Validators.maxLength(6),]],
      bond:['', Validators.required], 
      certificate_number: ['', [Validators.required, Validators.maxLength(30), ]],
      certificate_date: ['', Validators.required],
      certificate_type: ['', [Validators.required, Validators.maxLength(2), ]],
    })
  }

  public onTouched: () => void = () => {

    //console.log('data');
  };
  writeValue(val: any): void {
    //console.log('written values')
    val && this.homeConsumptionFormStep8.patchValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
    //console.log("on change");
    this.homeConsumptionFormStep8.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    //console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.homeConsumptionFormStep8.disable() : this.homeConsumptionFormStep8.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    //console.log("Consignment Info validation", c);
    return this.homeConsumptionFormStep8.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
  }


  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    return (
      (!this.homeConsumptionFormStep8.get(field).valid && this.homeConsumptionFormStep8.get(field).touched) ||
      (this.homeConsumptionFormStep8.get(field).untouched && this.formSumitAttempt)
    );
  }
  
  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }




// neet to include setValidators






  onSubmit() {
    // console.log(this.homeConsumptionFormStep8.valid);
    // console.log(this.homeConsumptionFormStep8.value);
    // console.log();
    if (this.homeConsumptionFormStep8.valid === true) {
      this.homeConsumptionFormStep8.value
      Swal.fire({
        title: 'Step 7 completed',
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

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import Swal from 'sweetalert2';
import {ValidatorsService} from '../../../common/service/validators.service';

@Component({
  selector: 'app-step3-dialog-content',
  templateUrl: './step3-dialog-content.component.html',
  styleUrls: ['./step3-dialog-content.component.scss']
})
export class Step3DialogContentComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  airlineIgmStep3:FormGroup;
  
  private formSumitAttempt: boolean;

  constructor(private _formBuilder: FormBuilder) { }



  ngOnInit(): void {
    this.airlineIgmStep3= this._formBuilder.group({
      hawb_no:['',[Validators.maxLength(20),Validators.required]],
      hawb_date:[''],
      port_origin:['',[Validators.maxLength(3),Validators.required]],
      port_destination:['',[Validators.maxLength(3),Validators.required]],
      shippment_type:['',[Validators.maxLength(1),Validators.required]],
      total_packages:['',[ValidatorsService.numberValidator,Validators.maxLength(8),Validators.required]],
      gross_weight:['',[Validators.maxLength(13),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),9),Validators.required]],
      item_description:['',[Validators.maxLength(30),Validators.required]],
      special_handling_code:['',[Validators.maxLength(15)]],
    })
  }
    // validation code
    public onTouched: () => void = () => {

      //console.log('data');
    };
    writeValue(val: any): void {
      //console.log('written values')
      val && this.airlineIgmStep3.patchValue(val, { emitEvent: true });
    }
    registerOnChange(fn: any): void {
      //console.log("on change");
      this.airlineIgmStep3.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn: any): void {
      //console.log("on blur");
      this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
      isDisabled ? this.airlineIgmStep3.disable() : this.airlineIgmStep3.enable();
    }
    validate(c: AbstractControl): ValidationErrors | null {
      //console.log("Consignment Info validation", c);
      return this.airlineIgmStep3.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
    }
    // check validation when you click the continue buttons
    isFieldValid(field: string) {
      return (
        (!this.airlineIgmStep3.get(field).valid && this.airlineIgmStep3.get(field).touched) ||
        (this.airlineIgmStep3.get(field).untouched && this.formSumitAttempt)
      );
    }
  
    displayFieldCss(field: string) {
      return {
        'has-error': this.isFieldValid(field),
        'has-feedback': this.isFieldValid(field)
      };
    }
    onSubmit() {
      if (this.airlineIgmStep3.valid === true) {
        this.airlineIgmStep3.value
        Swal.fire({
          title: 'Step 2 completed',
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

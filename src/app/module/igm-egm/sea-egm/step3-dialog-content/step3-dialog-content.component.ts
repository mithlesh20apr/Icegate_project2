import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder,FormControl,Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-step3-dialog-content',
  templateUrl: './step3-dialog-content.component.html',
  styleUrls: ['./step3-dialog-content.component.scss']
})
export class Step3DialogContentComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  seaEgmStep3:FormGroup;
   private formSumitAttempt: boolean;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.seaEgmStep3=this._formBuilder.group({
      container_no:['',[Validators.maxLength(11),]],
      container_status:['',[Validators.maxLength(1),]],
    })
  }
     // validation code
     public onTouched: () => void = () => {

      //console.log('data');
    };
    writeValue(val: any): void {
      //console.log('written values')
      val && this.seaEgmStep3.patchValue(val, { emitEvent: true });
    }
    registerOnChange(fn: any): void {
      //console.log("on change");
      this.seaEgmStep3.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn: any): void {
      //console.log("on blur");
      this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
      isDisabled ? this.seaEgmStep3.disable() : this.seaEgmStep3.enable();
    }
    validate(c: AbstractControl): ValidationErrors | null {
      //console.log("Consignment Info validation", c);
      return this.seaEgmStep3.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
    }
    // check validation when you click the continue buttons
    isFieldValid(field: string) {
      return (
        (!this.seaEgmStep3.get(field).valid && this.seaEgmStep3.get(field).touched) ||
        (this.seaEgmStep3.get(field).untouched && this.formSumitAttempt)
      );
    }
  
    displayFieldCss(field: string) {
      return {
        'has-error': this.isFieldValid(field),
        'has-feedback': this.isFieldValid(field)
      };
    }
    onSubmit() {
      if (this.seaEgmStep3.valid === true) {
        this.seaEgmStep3.value
        Swal.fire({
          title: 'Step 1 completed',
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

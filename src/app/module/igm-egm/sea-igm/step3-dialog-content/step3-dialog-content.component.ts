import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
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
  seaIgmStep3: FormGroup;
  private formSumitAttempt: boolean;
  constructor(private _formBuilder: FormBuilder) { }      



  ngOnInit(): void {
    this.seaIgmStep3=this._formBuilder.group({
      line_no:['',[Validators.maxLength(4),ValidatorsService.numberValidator]],
      sub_line_no:['',[Validators.maxLength(4),ValidatorsService.numberValidator]],
      container_no:['',[Validators.maxLength(11),Validators.required]],
      container_seal_no:['',[Validators.maxLength(15)]],
      container_agent_code:['',[Validators.maxLength(16)]],
      container_status:['',[Validators.maxLength(3),Validators.required]],
      total_no_of_packages_in_container:['',[Validators.maxLength(8),ValidatorsService.numberValidator]],
      container_weight:['',[Validators.maxLength(17),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),14)]],
      iso_code:['',[Validators.maxLength(4),Validators.required]],
      soc_flag:['',[Validators.maxLength(1),Validators.required]],
    })
  }
    // validation code
    public onTouched: () => void = () => {

      //console.log('data');
    };
    writeValue(val: any): void {
      //console.log('written values')
      val && this.seaIgmStep3.patchValue(val, { emitEvent: true });
    }
    registerOnChange(fn: any): void {
      //console.log("on change");
      this.seaIgmStep3.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn: any): void {
      //console.log("on blur");
      this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
      isDisabled ? this.seaIgmStep3.disable() : this.seaIgmStep3.enable();
    }
    validate(c: AbstractControl): ValidationErrors | null {
      //console.log("Consignment Info validation", c);
      return this.seaIgmStep3.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
    }
    // check validation when you click the continue buttons
    isFieldValid(field: string) {
      return (
        (!this.seaIgmStep3.get(field).valid && this.seaIgmStep3.get(field).touched) ||
        (this.seaIgmStep3.get(field).untouched && this.formSumitAttempt)
      );
    }
  
    displayFieldCss(field: string) {
      return {
        'has-error': this.isFieldValid(field),
        'has-feedback': this.isFieldValid(field)
      };
    }
    onSubmit() {
      if (this.seaIgmStep3.valid === true) {
        this.seaIgmStep3.value
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

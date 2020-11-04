import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors, FormControl, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Step3Component } from '../step3/step3.component';
import {ValidatorsService} from '../../../common/service/validators.service';
import { TooltipPosition } from '@angular/material/tooltip';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step2Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step2Component),
      multi: true
    }
  ]
})
export class Step2Component implements OnInit {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  seaEgmStep2: FormGroup;
  selected = new FormControl(0);
  selecteds = new FormControl(0);
  disableAddButton = false;
  disableAddButtons= false;
  @Input() index: number;
  private formSumitAttempt: boolean;
  value;
  constructor( private  _formBuilder: FormBuilder, public _dialog: MatDialog) { }

  ngOnInit(): void {
    this.seaEgmStep2=this._formBuilder.group({
     shippingbill_details: this._formBuilder.array([])
    })
  }

AddShippingBillDetails(): FormGroup{
  return this._formBuilder.group({
    sb_no: new FormControl('', [Validators.maxLength(7), ValidatorsService.numberValidator]),
    sb_date: new FormControl (''),
    port_where_sb_filed:new FormControl ('', [Validators.maxLength(6),  Validators.required]),
    port_of_destination:new FormControl ('', [Validators.maxLength(6),  Validators.required]),
    nature_of_cargo: new FormControl('', [Validators.maxLength(2),  Validators.required]),
    gateway_port:new FormControl ('', [Validators.maxLength(6),  Validators.required]),
    no_of_packages:new FormControl ('', [Validators.maxLength(8), ValidatorsService.numberValidator]),
    // no_of_packages_nc: new FormControl('', [Validators.maxLength(8), ValidatorsService.numberValidator,Validators.required]),
    container_details:this._formBuilder.array([])
  })
}

AddContainerDetails():FormGroup{
  return this._formBuilder.group({
    container_no: new FormControl('',Validators.maxLength(11)),
      container_status: new FormControl('',[Validators.maxLength(1)]),
  })
}


  // below functions are the add and remove functions for the Array
  addShippingBillDetails(): FormArray {
        return this.seaEgmStep2.get("shippingbill_details") as FormArray
  }
  addContainerDetails(i:number) : FormArray {
        return this.addShippingBillDetails().at(i).get("container_details") as FormArray
  }
  // Adding Tabs for MAWB Details
  addShippingBilltabs() {
    this.addShippingBillDetails().push(this.AddShippingBillDetails());
    this.selected.setValue(this.addShippingBillDetails().controls.length);
    if(this.addShippingBillDetails().controls.length == 3){
      this.disableAddButton = true;
    }
  }
// Remove Tabs for MAWB Details
  removeShippingBilltabs(index: number) {
    this.addShippingBillDetails().controls.splice(index, 1);
    if(this.addShippingBillDetails().controls.length < 3){
      this.disableAddButton = false;
    }
  }

// Adding Tabs for HAWB Details
  addContainertabs(i:number) {
    this.addContainerDetails(i).push(this.AddContainerDetails());
     if(this.addContainerDetails(i).controls.length === 10){
      this.disableAddButtons = true;
    }
  }
  removeContainertabs(i: number) {
    this.addContainerDetails(i).controls.splice(i, 1);
    if(this.addContainerDetails(i).controls.length < 10){
      this.disableAddButton = false;
    }
  } 


  choose(event) {
    this.value=event.value
    console.log("Event", event)
  }
    // validation code
    public onTouched: () => void = () => {

      //console.log('data');
    };
    writeValue(val: any): void {
      //console.log('written values')
      val && this.seaEgmStep2.patchValue(val, { emitEvent: true });
    }
    registerOnChange(fn: any): void {
      //console.log("on change");
      this.seaEgmStep2.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn: any): void {
      //console.log("on blur");
      this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
      isDisabled ? this.seaEgmStep2.disable() : this.seaEgmStep2.enable();
    }
    validate(c: AbstractControl): ValidationErrors | null {
      //console.log("Consignment Info validation", c);
      return this.seaEgmStep2.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
    }
    // check validation when you click the continue buttons
    isFieldValid(field: string) {
      return (
        (!this.seaEgmStep2.get(field).valid && this.seaEgmStep2.get(field).touched) ||
        (this.seaEgmStep2.get(field).untouched && this.formSumitAttempt)
      );
    }
  
    displayFieldCss(field: string) {
      return {
        'has-error': this.isFieldValid(field),
        'has-feedback': this.isFieldValid(field)
      };
    }
    onSubmit() {
      if (this.seaEgmStep2.valid === true) {
        this.seaEgmStep2.value
        Swal.fire({
          title: 'Step 2 completed',
          icon: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
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

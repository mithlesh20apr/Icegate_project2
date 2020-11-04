import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Step3Component} from '../step3/step3.component';
import { FormBuilder, FormGroup, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors, FormControl, FormArray } from '@angular/forms';
import {ValidatorsService} from '../../../common/service/validators.service';
import Swal from 'sweetalert2';
import { TooltipPosition } from '@angular/material/tooltip';

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
  selected = new FormControl(0);
  selecteds = new FormControl(0);
  disableAddButton = false;
  disableAddButtons= false;
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  airlineIgmStep2: FormGroup;
  private formSumitAttempt: boolean;
  @Input() index: number;
  constructor( public _dialog: MatDialog, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.airlineIgmStep2= this._formBuilder.group({
    mawb_details:this._formBuilder.array([]),
    })
  }
  // openDialog(){
  //   let dialogRef = this._dialog.open(Step3Component);
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(result);
  //   });
  // }

//  MAWB Details Validation
  AddMAWBDetails(): FormGroup{
    return this._formBuilder.group({
     
        uld_number:new FormControl('',[Validators.maxLength(15),Validators.required]),
        mawb_no: new FormControl('',[Validators.maxLength(20),Validators.required]),
        mawb_date: new FormControl(''),
        port_origin:new FormControl('',[Validators.maxLength(3),Validators.required]),
        port_destination:new FormControl('',[Validators.maxLength(3),Validators.required]),
        shippment_type: new FormControl('',[Validators.maxLength(1),Validators.required]),
        total_packages:new FormControl('',[ValidatorsService.numberValidator,Validators.maxLength(8),Validators.required]),
        gross_weight: new FormControl('',[Validators.maxLength(13),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),9),Validators.required]),
        item_description: new FormControl('',[Validators.maxLength(30),Validators.required]),
        special_handling_code: new FormControl('',[Validators.maxLength(15)]),
        hawb_details: this._formBuilder.array([]),
    
    })

  }
  // HAWB Details Validation
  AddHAWBDetails():FormGroup{
    return this._formBuilder.group({
     
        hawb_no:new FormControl('',[Validators.maxLength(20),Validators.required]),
        hawb_date: new FormControl (''),
        port_origin: new FormControl('',[Validators.maxLength(3),Validators.required]),
        port_destination: new FormControl('',[Validators.maxLength(3),Validators.required]),
        shippment_type: new FormControl('',[Validators.maxLength(1),Validators.required]),
        total_packages: new FormControl('',[ValidatorsService.numberValidator,Validators.maxLength(8),Validators.required]),
        gross_weight: new FormControl('',[Validators.maxLength(13),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),9),Validators.required]),
        item_description:new FormControl('',[Validators.maxLength(30),Validators.required]),
        special_handling_code:new FormControl('',Validators.maxLength(15)),
     
    })
  }

  // below functions are the add and remove functions for the Array
  addMawbDetails(): FormArray {
        return this.airlineIgmStep2.get("mawb_details") as FormArray
  }
  addHawbDetails(i:number) : FormArray {
        return this.addMawbDetails().at(i).get("hawb_details") as FormArray
  }
  // Adding Tabs for MAWB Details
  addMAWBtabs() {
    this.addMawbDetails().push(this.AddMAWBDetails());
    this.selected.setValue(this.addMawbDetails().controls.length);
    if(this.addMawbDetails().controls.length == 3){
      this.disableAddButton = true;
    }
  }
// Remove Tabs for MAWB Details
  removeMAWBtabs(index: number) {
    this.addMawbDetails().controls.splice(index, 1);
    if(this.addMawbDetails().controls.length < 3){
      this.disableAddButton = false;
    }
  }

// Adding Tabs for HAWB Details
  addHAWBtabs(i:number) {
    this.addHawbDetails(i).push(this.AddHAWBDetails());
     if(this.addHawbDetails(i).controls.length === 10){
      this.disableAddButtons = true;
    }
  }
  removeHAWBtabs(i: number) {
    this.addHawbDetails(i).controls.splice(i, 1);
    if(this.addHawbDetails(i).controls.length < 10){
      this.disableAddButton = false;
    }
  } 

    // validation code
    public onTouched: () => void = () => {

      //console.log('data');
    };
    writeValue(val: any): void {
      //console.log('written values')
      val && this.airlineIgmStep2.patchValue(val, { emitEvent: true });
    }
    registerOnChange(fn: any): void {
      //console.log("on change");
      this.airlineIgmStep2.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn: any): void {
      //console.log("on blur");
      this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
      isDisabled ? this.airlineIgmStep2.disable() : this.airlineIgmStep2.enable();
    }
    validate(c: AbstractControl): ValidationErrors | null {
      //console.log("Consignment Info validation", c);
      return this.airlineIgmStep2.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
    }
    // check validation when you click the continue buttons
    isFieldValid(field: string) {
      return (
        (!this.airlineIgmStep2.get(field).valid && this.airlineIgmStep2.get(field).touched) ||
        (this.airlineIgmStep2.get(field).untouched && this.formSumitAttempt)
      );
    }
  
    displayFieldCss(field: string) {
      return {
        'has-error': this.isFieldValid(field),
        'has-feedback': this.isFieldValid(field)
      };
    }
    onSubmit() {
      if (this.airlineIgmStep2.valid === true) {
        this.airlineIgmStep2.value
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

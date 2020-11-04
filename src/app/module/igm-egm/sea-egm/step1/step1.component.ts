import { Component, forwardRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators , ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors, FormControl  } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Step2Component } from '../step2/step2.component'
import { ValidatorsService } from '../../../common/service/validators.service'
import { TooltipPosition } from '@angular/material/tooltip';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step1Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step1Component),
      multi: true
    }
  ]
})
export class Step1Component implements OnInit {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  seaEgmStep1: FormGroup;
  value
  private formSumitAttempt: boolean;
  constructor(private _formBuilder: FormBuilder, public _dialog: MatDialog) { }

  ngOnInit(): void {
    this.seaEgmStep1=this._formBuilder.group({
      message_type: ['', Validators.maxLength(1)],
      custom_house_code: ['', Validators.maxLength(6)],
      egm_no: ['', [Validators.maxLength(7), ValidatorsService.numberValidator]],
      egm_date: [''],
      // sb_no: ['', [Validators.maxLength(7), ValidatorsService.numberValidator]],
      // sb_date: ['', []],
      // port_where_sb_filed: ['', [Validators.maxLength(6),  Validators.required]],
      // port_of_destination: ['', [Validators.maxLength(6),  Validators.required]],
      // nature_of_cargo: ['', [Validators.maxLength(2),  Validators.required]],
      // gateway_port: ['', [Validators.maxLength(6),  Validators.required]],
      // no_of_packages: ['', [Validators.maxLength(8), ValidatorsService.numberValidator]],
      // no_of_packages_nc: ['', [Validators.maxLength(8), ValidatorsService.numberValidator,Validators.required]]
    })
  }
  openDialog() {
    let dialogRef = this._dialog.open(Step2Component);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
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
    val && this.seaEgmStep1.patchValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
    //console.log("on change");
    this.seaEgmStep1.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    //console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.seaEgmStep1.disable() : this.seaEgmStep1.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    //console.log("Consignment Info validation", c);
    return this.seaEgmStep1.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
  }
  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    return (
      (!this.seaEgmStep1.get(field).valid && this.seaEgmStep1.get(field).touched) ||
      (this.seaEgmStep1.get(field).untouched && this.formSumitAttempt)
    );
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }
  onSubmit() {
    if (this.seaEgmStep1.valid === true) {
      this.seaEgmStep1.value
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

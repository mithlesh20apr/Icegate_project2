import { Component, OnInit, forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { ShippingBillService } from '../service/shipping-bill.service';
import { ValidatorsService } from '../../common/service/validators.service'
import Swal from 'sweetalert2';
import { TooltipPosition } from '@angular/material/tooltip';
import { MatRadioChange } from '@angular/material/radio';
@Component({
  selector: 'app-step7',
  templateUrl: './step7.component.html',
  styleUrls: ['./step7.component.scss'],
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
export class Step7Component implements OnInit {

  shipingBillStepSeven: FormGroup;
  private formSumitAttempt: boolean;
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.shipingBillStepSeven = this._formBuilder.group({


      packing_details: new FormGroup({
        packing_number_from: new FormControl('', [Validators.required, Validators.maxLength(5), ValidatorsService.numberValidator]),
        packing_number_to: new FormControl('', [Validators.required, Validators.maxLength(5), ValidatorsService.numberValidator]),
        packing_code: new FormControl('', [Validators.required, Validators.maxLength(3)]),
        rotation_date: new FormControl('', Validators.required),
        rotation_number: new FormControl('', [Validators.required, Validators.maxLength(7), ValidatorsService.numberValidator]),
        factory_stuffed: new FormControl('', Validators.required),
        sample_accompanied: new FormControl('', Validators.required),
      }),
      // Packing details


      // Container details
      container_details: new FormGroup({
        container_number: new FormControl('', Validators.maxLength(15)),
        container_size: new FormControl('', [Validators.required, Validators.maxLength(4)]),
        excise_seal_number: new FormControl('', Validators.maxLength(35)),
        seal_date: new FormControl(''),
        seal_type_indicator: new FormControl('', Validators.required),
        seal_device_id: new FormControl('', Validators.maxLength(35)),
        movement_document_type: new FormControl('', Validators.maxLength(5)),
        movement_document_number: new FormControl('', Validators.maxLength(35)),
        eqmnt_type: new FormControl('', [Validators.required, Validators.maxLength(3)]),
        eqmnt_qty: new FormControl('', [Validators.maxLength(8), ValidatorsService.numberValidator]),
        eqmnt_qty_code: new FormControl('', Validators.maxLength(3)),
      })

    })
  }
  // validation code
  public onTouched: () => void = () => {

    //console.log('data');
  };
  writeValue(val: any): void {
    //console.log('written values')
    val && this.shipingBillStepSeven.patchValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
    //console.log("on change");
    this.shipingBillStepSeven.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    //console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.shipingBillStepSeven.disable() : this.shipingBillStepSeven.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    //console.log("Consignment Info validation", c);
    return this.shipingBillStepSeven.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
  }


  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    return (
      (!this.shipingBillStepSeven.get(field).valid && this.shipingBillStepSeven.get(field).touched) ||
      (this.shipingBillStepSeven.get(field).untouched && this.formSumitAttempt)
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
    // console.log(this.shipingBillStepSeven.valid);
    // console.log(this.shipingBillStepSeven.value);
    // console.log();
    if (this.shipingBillStepSeven.valid === true) {
      this.shipingBillStepSeven.value
      Swal.fire({
        title: 'Step 6 completed',
        text: "Please click next for other step or click cancel",
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Next &nbsp; &#8594;'
      }).then((result) => {
        if (result.isConfirmed) {
          let element: HTMLElement = document.getElementById('save_continues') as HTMLElement;
          element.click();
        }
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Required Validation is left. Please check',
      }).then((result) => {
        this.formSumitAttempt = true
      })

    }
  }

}

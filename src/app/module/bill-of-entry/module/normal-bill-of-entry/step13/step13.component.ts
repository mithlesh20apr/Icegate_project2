import { Component, OnInit ,forwardRef} from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms'; 
import { ValidatorsService } from '../../../../common/service/validators.service';
import Swal from 'sweetalert2';
import {TooltipPosition} from '@angular/material/tooltip';
@Component({
  selector: 'app-step13',
  templateUrl: './step13.component.html',
  styleUrls: ['./step13.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step13Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step13Component),
      multi: true
    }
  ]
})
export class Step13Component implements OnInit {

  panelOpenState = false;
  isLinear = false;
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  homeConsumptionFormStep13: FormGroup;
  private formSumitAttempt:boolean;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.homeConsumptionFormStep13 = this._formBuilder.group({

      invoice_serial_number: ['', [Validators.required, Validators.maxLength(5), ValidatorsService.numberValidator]],
      item_serial_number: ['', [Validators.required, Validators.maxLength(4), ValidatorsService.numberValidator]],
      decleration_type: ['', [Validators.required, Validators.maxLength(1), ]],
      cha_license_number: ['', [Validators.maxLength(15), ]],
      iec: ['', [Validators.maxLength(10), ]],
      icegate_user_id: ['', [Validators.required, Validators.maxLength(15), ]],
      image_reference_number: ['', [Validators.required, Validators.maxLength(16), ]],
      document_type_code: ['', [Validators.required, Validators.maxLength(6), ]],
      document_issuing_party_code: ['', [Validators.maxLength(35), ]],
      document_issuing_party_name: ['', [Validators.required, Validators.maxLength(70), ]],
      document_issuing_party_name_address1: ['', [Validators.maxLength(70), ]],
      document_issuing_party_name_address2: ['', [Validators.maxLength(70), ]],
      document_issuing_party_name_city: ['', [Validators.maxLength(35), ]],
      document_issuing_party_name_pin: ['', [Validators.maxLength(10)]],
      document_reference_number:['', [Validators.maxLength(17),]],
      place_of_issue:['', [Validators.required,Validators.maxLength(35),]],
      document_issue_date:['',Validators.required],
      document_expiry_date:[''],
      document_beneficiary_party_code:['', [Validators.maxLength(35),]],
      document_beneficiary_party_name:['', [Validators.required,Validators.maxLength(70),]],
      document_beneficiary_party_name_address1:['', [Validators.maxLength(70)]],
      document_beneficiary_party_name_address2:['', [Validators.maxLength(70)]],
      document_beneficiary_party_name_city:['', [Validators.maxLength(35),]],
      document_beneficiary_party_name_pin:['', [Validators.maxLength(10)]],
      file_type: ['', [Validators.required, Validators.maxLength(5), ]],
    })
  }

  public onTouched: () => void = () => {

    //console.log('data');
  };
  writeValue(val: any): void {
    //console.log('written values')
    val && this.homeConsumptionFormStep13.patchValue(val, { emitEvent: true });
  }
  registerOnChange(fn: any): void {
    //console.log("on change");
    this.homeConsumptionFormStep13.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    //console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.homeConsumptionFormStep13.disable() : this.homeConsumptionFormStep13.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    //console.log("Consignment Info validation", c);
    return this.homeConsumptionFormStep13.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
  }


  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    return (
      (!this.homeConsumptionFormStep13.get(field).valid && this.homeConsumptionFormStep13.get(field).touched) ||
      (this.homeConsumptionFormStep13.get(field).untouched && this.formSumitAttempt)
    );
  }
  
  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }
  
  onSubmit() {
    // console.log(this.homeConsumptionFormStep13.valid);
    // console.log(this.homeConsumptionFormStep13.value);
    // console.log();
    if (this.homeConsumptionFormStep13.valid === true) {
      this.homeConsumptionFormStep13.value
      Swal.fire({
        title: 'Step 8 completed',
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

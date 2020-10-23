import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/module/login/service/auth.service';

@Component({
  selector: 'app-generate-otp',
  templateUrl: './generate-otp.component.html',
  styleUrls: ['./generate-otp.component.scss']
})
export class GenerateOtpComponent implements OnInit {
  radioOptions: string[] = [];
  forgotPassForm: FormGroup;
  selectedRadio: string;
  mobileNo: string;
  email: string;
  countryCode: string;
  errorMessage: string;
  @Input() authDetails;
  @Output() proceedNext: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private authService: AuthService
  ) {
    this.radioOptions = ['mobile', 'email'];
    this.selectedRadio = 'mobile';
    this.countryCode = '+91';
  }

  ngOnInit(): void {
    this.initializeForm();
    console.log(this.authDetails)
    if (this.authDetails) {
      this.authDetails.authType == 'mobile' ? this.forgotPassForm.patchValue({ mobileNo: this.authDetails.authValue.slice(3, 13) }) : this.forgotPassForm.patchValue({ mobileNo: null });
      this.authDetails.authType == 'email' ? this.forgotPassForm.patchValue({ email: this.authDetails.authValue }) : this.forgotPassForm.patchValue({ email: null });
    }
  }

  get emailId(): any {
    return this.forgotPassForm.get('email');
  }

  get mobile(): any {
    return this.forgotPassForm.get('mobileNo');
  }

  initializeForm() {
    this.forgotPassForm = new FormGroup({
      authType: new FormControl(this.radioOptions[0], Validators.required),
      mobileNo: new FormControl(this.mobileNo, [
        Validators.required,
        Validators.pattern('^[1-9]{1}[0-9]{9}$'),
      ]),
      email: new FormControl(this.email, [
        Validators.required,
        Validators.email,
      ])
    });
  }

  changeSelected(value) {
    this.selectedRadio = value;
    this.errorMessage = null;
    value == 'mobile' ? this.emailId.reset() : this.mobile.reset();
  }

  onCountryChange(event) {
    console.log(event.dialCode)
    this.countryCode = '+' + event.dialCode;
  }

  getOtp() {
    this.errorMessage = null;
    let authType = this.forgotPassForm.value.authType;
    let emittedData = {};
    if (authType == 'mobile') {
      let mobile = this.countryCode + this.forgotPassForm.value.mobileNo
      this.authService.getMobileOtp(mobile).subscribe(data => {
        console.log(data)
        emittedData = {
          authType: authType,
          authTypeValue: mobile,
          icegateId: data.icegateId,
          attempsCount: data.attempsCount
        }
        this.proceedNext.emit(emittedData);
      },
        err => {
          console.log(err)
          this.errorMessage = err.errors[0];
        })
    } else {
      let email = this.forgotPassForm.value.email
      this.authService.getEmailOtp(email).subscribe(data => {
        console.log(data)
        emittedData = {
          authType: authType,
          authTypeValue: this.forgotPassForm.value.email,
          icegateId: data.icegateId,
          attempsCount: data.attempsCount
        }
        this.proceedNext.emit(emittedData);
      },
        err => {
          console.log(err)
          this.errorMessage = err.errors[0];
        })
    }



  }


}

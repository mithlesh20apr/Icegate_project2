import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/module/login/service/auth.service';

@Component({
  selector: 'app-verify-details',
  templateUrl: './verify-details.component.html',
  styleUrls: ['./verify-details.component.scss']
})
export class VerifyDetailsComponent implements OnInit {

  @Input() userDetails;
  @Output() changePass: EventEmitter<any> = new EventEmitter<any>();
  @Output() proceedBack: EventEmitter<any> = new EventEmitter<any>();
  showOtp: boolean;
  enableContinue: boolean;
  email: string;
  mobile: string;
  errorMessage: string;
  successMessage: string;
  authType: string;
  expirationTime: number;
  id;
  otpLimit: boolean;

  @ViewChild('ngOtpInput') ngOtpInputRef: any;
  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '60px',
      'height': '50px'
    }
  };

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.maskUserDetails();
  }

  back() {
    this.proceedBack.emit({ icegateId: this.userDetails.icegateId });
  }

  maskUserDetails() {
    console.log(this.userDetails)
    let email = this.userDetails.email;
    let number = this.userDetails.mobile;
    if (number != "" && number != null) {
      this.mobile = number.slice(0, 5) + '******' + number.slice(8, 10)
    }
    if (email != "" && email != null) {
      let splitEmail = email.split('@');
      let splitEmail1 = splitEmail[0];
      let length = splitEmail1.length;
      var starValue = '';
      for (let i = 0; i < length - 2; i++) {
        starValue = starValue + '*'
      }
      this.email = splitEmail1.slice(0, 2) + starValue + '@' + splitEmail[1];
    }
    console.log("mobile :", this.mobile);
    console.log('email :', this.email);
  }

  timerFunction() {
    this.id = setInterval(() => {
      this.expirationTime--;
      if (this.expirationTime == 0) {
        this.errorMessage = "The OTP has expired. Please generate OTP again"
        clearInterval(this.id);
      }
    }, 1000);
  }


  resendOtp() {
    this.ngOtpInputRef.otpForm.reset();
    this.getOtp(this.authType);
  }

  onOtpChange(event) {
    this.enableContinue = false;
    if (event.length == 6) {
      this.enableContinue = true;
    }
  }

  getOtp(value) {
    this.errorMessage = null;
    this.showOtp = false;
    this.errorMessage = null;
    if (value == 'mobile') {
      this.authType = 'mobile';
      this.authService.getMobileOtp(this.userDetails.mobile).subscribe(data => {
        this.showOtp = true;
        clearInterval(this.id);
        this.expirationTime = 120;
        this.timerFunction();
      },
        err => {
          console.log(err)
          // this.errorMessage = err.errors[0];
          clearInterval(this.id);
          this.expirationTime = 0;
          this.otpLimit = true;
        })
    }
    else {
      this.authType = 'email';
      this.authService.getEmailOtp(this.userDetails.email).subscribe(data => {
        console.log(data)
        this.showOtp = true;
        clearInterval(this.id);
        this.expirationTime = 120;
        this.timerFunction();
      },
        err => {
          console.log(err)
          // this.errorMessage = err.errors[0];
          clearInterval(this.id);
          this.expirationTime = 0;
          this.otpLimit = true;
        })
    }
  }

  verifyOtp() {
    this.errorMessage = null;
    let icegateId = this.userDetails.icegateId;
    let otp = this.ngOtpInputRef.otpForm.controls.ctrl_0.value + this.ngOtpInputRef.otpForm.controls.ctrl_1.value +
      this.ngOtpInputRef.otpForm.controls.ctrl_2.value + this.ngOtpInputRef.otpForm.controls.ctrl_3.value +
      this.ngOtpInputRef.otpForm.controls.ctrl_4.value + this.ngOtpInputRef.otpForm.controls.ctrl_5.value
    this.authService.verifyOtp(icegateId, otp).subscribe(data => {
      console.log(data)
      this.changePass.emit()
    },
      err => {
        console.log(err)
        if (err.errors[0] == "OTP validation limit exceed") {
          clearInterval(this.id);
          this.expirationTime = 0;
          this.errorMessage = err.errors[0];
        } else {
          this.errorMessage = err.errors[0];
        }

      })
  }

}

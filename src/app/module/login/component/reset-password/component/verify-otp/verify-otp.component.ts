import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/module/login/service/auth.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {
  errorMessage: string;
  authTypeValue: string;
  enableContinue: boolean;
  expirationTime: number;
  id;
  otpLimit:boolean;
  @Input() authDetails: any;
  @Output() proceedBack: EventEmitter<any> = new EventEmitter<any>();
  @Output() changePass: EventEmitter<any> = new EventEmitter<any>();
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

  constructor(private authService: AuthService) {
    this.expirationTime = 120;
  }

  ngOnInit(): void {
    console.log(this.authDetails)
    this.maskUserDetails();
    this.timerFunction();
  }

  maskUserDetails() {
    let email;
    let number;
    this.authDetails.authType == 'email' ? email = this.authDetails.authTypeValue : email = null;
    this.authDetails.authType == 'mobile' ? number = this.authDetails.authTypeValue : number = null;
    if (number != "" && number != null) {
      this.authTypeValue = number.slice(0, 5) + '******' + number.slice(8, 10)
    }
    if (email != "" && email != null) {
      let splitEmail = email.split('@');
      let splitEmail1 = splitEmail[0];
      let length = splitEmail1.length;
      var starValue = '';
      for (let i = 0; i < length - 2; i++) {
        starValue = starValue + '*'
      }
      this.authTypeValue = splitEmail1.slice(0, 2) + starValue + '@' + splitEmail[1];
    }
  }



  resendOtp() {
    this.errorMessage = null;
    this.ngOtpInputRef.otpForm.reset();
    if (this.authDetails.authType == 'mobile') {
      this.authService.getMobileOtp(this.authDetails.authTypeValue).subscribe(data => {
        clearInterval(this.id);
        this.expirationTime=120;
        this.timerFunction();
        this.otpLimit=false;
        console.log(data)
      },
        err => {
          console.log(err)
          // this.errorMessage = err.errors[0];
          clearInterval(this.id);
          this.expirationTime=0;
          this.otpLimit=true;
        })
    }
    else {
      this.authService.getEmailOtp(this.authDetails.authTypeValue).subscribe(data => {
        console.log(data)
        clearInterval(this.id);
        this.expirationTime=120;
        this.timerFunction();
        this.otpLimit=false;
      },
        err => {
          console.log(err)
          // this.errorMessage = err.errors[0];
          clearInterval(this.id);
          this.expirationTime=0;
          this.otpLimit=true;
        })
    }
  }

  timerFunction() {
    this.id = setInterval(() => {
      this.expirationTime--;
      if (this.expirationTime == 0) {
        clearInterval(this.id);
      }
    }, 1000);
  }

  onOtpChange(event) {
    this.enableContinue = false;
    if (event.length == 6) {
      this.enableContinue = true;
    }
  }

  verifyOtp() {
    // console.log(this.ngOtpInputRef.otpForm.controls.ctrl_0.value)
    this.errorMessage = null;
    let icegateId = this.authDetails.icegateId;
    let otp = this.ngOtpInputRef.otpForm.controls.ctrl_0.value + this.ngOtpInputRef.otpForm.controls.ctrl_1.value +
      this.ngOtpInputRef.otpForm.controls.ctrl_2.value + this.ngOtpInputRef.otpForm.controls.ctrl_3.value +
      this.ngOtpInputRef.otpForm.controls.ctrl_4.value + this.ngOtpInputRef.otpForm.controls.ctrl_5.value
    this.authService.verifyOtp(icegateId, otp).subscribe(data => {
      console.log(data)
      this.changePass.emit({ icegateId: icegateId })
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


  hideOtp() {
    this.authDetails.authType
    this.proceedBack.emit({authType:this.authDetails.authType,authValue:this.authDetails.authTypeValue});
  }


}

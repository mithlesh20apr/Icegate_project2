import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password-layout',
  templateUrl: './reset-password-layout.component.html',
  styleUrls: ['./reset-password-layout.component.scss']
})
export class ResetPasswordLayoutComponent implements OnInit {

  getOtp: boolean;
  verifyOtp: boolean;
  createPassword: boolean;
  authDetails: any;
  icegateId:any;
  constructor() {
    this.getOtp = true;
  }

  ngOnInit(): void {
  }

  verifyOtpFun(event) {
    // console.log(event)
    this.authDetails = event
    // if (event.verifyOtp == true) {
      this.verifyOtp = true;
      this.getOtp = false;
    // }
  }

  hideOtp(event) {
    this.authDetails=event;
    this.verifyOtp = false;
    this.getOtp = true
  }

  changePass(event) {
    this.icegateId=event;
    this.getOtp = false;
    this.verifyOtp = false;
    this.createPassword = true;
  }

  hidePassForm(event) {
    this.getOtp = false;
    this.verifyOtp = true;
    this.createPassword = false;

  }

}

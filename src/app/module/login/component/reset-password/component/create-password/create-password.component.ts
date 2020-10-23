import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/module/login/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss']
})
export class CreatePasswordComponent implements OnInit {

  @Input() userDetails;
  @Output() hidePass: EventEmitter<any> = new EventEmitter<any>();
  changePassForm: FormGroup;
  passNumCheck: boolean;
  passSpecialCharCheck: boolean;
  passDiffCaseCheck: boolean;
  redCheck: boolean;
  yellowCheck: boolean;
  orangeCheck: boolean;
  greenCheck: boolean;
  greenDarkCheck: boolean;
  passType: string;
  passwordStrength: string;
  showStrengthBar:boolean;

  constructor(
    private authService:AuthService,
    private router:Router
  ) {
    this.passType = 'password';
  }

  ngOnInit(): void {
    console.log(this.userDetails)
    this.initializeForm();
  }

  initializeForm() {
    this.changePassForm = new FormGroup({
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
        ),
      ]),
    });
  }

  viewPass() {
    this.passType == 'password' ? (this.passType = 'text') : (this.passType = 'password');
  }

  checkIcegatePass(pass) {
    this.showStrengthBar=true;
    pass.match('[0-9]') ? (this.passNumCheck = true) : (this.passNumCheck = false);
    this.specialCharCheckMethod(pass) ? (this.passSpecialCharCheck = true) : (this.passSpecialCharCheck = false);
    pass.match('[A-Z]') && pass.match('[a-z]') ? (this.passDiffCaseCheck = true) : (this.passDiffCaseCheck = false);
    this.redCheck = false;
    this.yellowCheck = false;
    this.orangeCheck = false;
    this.greenCheck = false;
    this.greenDarkCheck = false;
    this.passwordStrength=null;
    if (this.passNumCheck || this.passSpecialCharCheck || this.passDiffCaseCheck || pass.length >= 2) {
      this.redCheck = true;
      this.yellowCheck = false;
      this.orangeCheck = false;
      this.greenCheck = false;
      this.greenDarkCheck = false;
      this.passwordStrength='Weak'
    }
    if ((this.passNumCheck || this.passSpecialCharCheck || this.passDiffCaseCheck) && pass.length > 4) {
      this.redCheck = false;
      this.yellowCheck = false;
      this.orangeCheck = true;
      this.greenCheck = false;
      this.greenDarkCheck = false;
      this.passwordStrength='Too Short'
    }
    if (this.passNumCheck && this.passSpecialCharCheck && this.passDiffCaseCheck && pass.length > 8) {
      this.redCheck = false;
      this.yellowCheck = true;
      this.orangeCheck = false;
      this.greenCheck = false;
      this.greenDarkCheck = false;
      this.passwordStrength='Fair'
    }
    if (this.passNumCheck && this.passSpecialCharCheck && this.passDiffCaseCheck && pass.length > 10) {
      this.redCheck = false;
      this.yellowCheck = false;
      this.orangeCheck = false;
      this.greenCheck = true;
      this.greenDarkCheck = false;
      this.passwordStrength='Good'
    }
    if (this.passNumCheck && this.passSpecialCharCheck && this.passDiffCaseCheck && pass.length >= 12) {
      this.redCheck = false;
      this.yellowCheck = false;
      this.orangeCheck = false;
      this.greenCheck = true;
      this.greenDarkCheck = true;
      this.passwordStrength='Strong'
    }
  }

  specialCharCheckMethod(val) {
    if (val.includes('#') || val.includes('?') || val.includes('!') || val.includes('@') || val.includes('$') || val.includes('%') || val.includes('^') || val.includes('&') || val.includes('*') || val.includes('-') || val.includes('_')) {
      return true;
    }
    return false;
  }

  hidePassForm() {
    this.hidePass.emit();
  }

  changePass() {
    console.log(this.changePassForm.value)
    let icegateId = this.userDetails.icegateId;
    let password = this.changePassForm.value.password
    this.authService.resetPassword(icegateId, password).subscribe(data => {
      this.authService.setForgetPassValue(true);
      this.router.navigate(['/login'])
    },err=>{
      console.log(err)
    })
  }

}

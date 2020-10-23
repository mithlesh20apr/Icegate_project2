import { Component, OnInit, ViewChild, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  passType: string;
  errorMessage: string;
  unlockAccount: boolean;
  forgotPass: boolean;
  internalUserLocked:boolean;
  @ViewChild('content') content: TemplateRef<any>;

  constructor(
    private router: Router,
    private authService: AuthService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    this.passType = 'password';
    this.authService.getUnlockAccountValue() ? this.unlockAccount = true : this.unlockAccount = false;
    this.authService.setUnlockAccountValue(false);
    this.authService.getForgetPassValue() ? this.forgotPass = true : this.forgotPass = false;
    this.authService.setForgetPassValue(false);
  }

  ngOnInit(): void {
    this.initilizeForm();
  }

  initilizeForm() {
    this.loginForm = new FormGroup({
      icegateId: new FormControl(null, [Validators.required]),
      email: new FormControl(null),
      password: new FormControl(null, [Validators.required])
    })
  }

  viewPass() {
    this.passType == 'password' ? (this.passType = 'text') : (this.passType = 'password');
  }

  login() {
    this.errorMessage = null;
    let icegateId = this.loginForm.value.icegateId;
    let password = this.loginForm.value.password;

    if (this.loginForm.value.email == null) {
      console.log(this.loginForm.value)
      this.authService.login(icegateId, password).subscribe(data => {
        console.log(data)
        this.authService.setLoggedIn(true, data.token);
        sessionStorage.setItem("icegateId", icegateId)
        this.router.navigate(['/dashboard'])
      },
        err => {
          console.log(err)
          if (err.errors[0].split(" ")[0] == "External") {
            this.modalService.open(this.content,
              { centered: true, size: 'l', windowClass: 'modalClass', backdropClass: 'backdropClass' });
          }else if(err.errors[0].split(" ")[0] == "Internal"){
            this.internalUserLocked=true;
          } else {
            this.errorMessage = err.errors[0];
          }
        })
    }
  }

}

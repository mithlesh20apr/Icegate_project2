import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-unlock-account-layout',
  templateUrl: './unlock-account-layout.component.html',
  styleUrls: ['./unlock-account-layout.component.scss']
})
export class UnlockAccountLayoutComponent implements OnInit {

  userDetails: any = {}
  showIcegateIdComponent:boolean;
  showOtpComponent:boolean;
  showcreatePasswordComponent:boolean;

  constructor(private modalService: NgbModal) {
    this.modalService.dismissAll();
    this.showIcegateIdComponent=true;
   }

  ngOnInit(): void {
  }

  verifyOtpFun(event) {
    this.userDetails = event;
    this.showIcegateIdComponent=false;
    this.showOtpComponent=true
    this.showcreatePasswordComponent=false;
  }

  hideOtp(event){
    this.userDetails=event;
    this.showOtpComponent=false;
    this.showIcegateIdComponent=true;
    this.showcreatePasswordComponent=false;
  }

  changePass(event){
    this.showOtpComponent=false;
    this.showIcegateIdComponent=false;
    this.showcreatePasswordComponent=true;
  }

}

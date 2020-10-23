import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/module/login/service/auth.service';

@Component({
  selector: 'app-check-icegate-id',
  templateUrl: './check-icegate-id.component.html',
  styleUrls: ['./check-icegate-id.component.scss']
})
export class CheckIcegateIdComponent implements OnInit {
  icegateIdForm: FormGroup;
  errorMessage:string;
  @Input() userDetails;
  @Output() proceedNext: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initilizeForm();
    this.icegateIdForm.patchValue({icegateId:this.userDetails.icegateId});
  }

  initilizeForm(){
    this.icegateIdForm = new FormGroup({
      icegateId: new FormControl('', [Validators.required, Validators.maxLength(25), Validators.pattern('^[A-Za-z0-9-_]{8,25}$')])
    })
  }
  


  checkIcegateId() {
    this.errorMessage=null;
    let data={}

    this.authService.getVerificationOptions(this.icegateIdForm.value.icegateId).subscribe(resData=>{
      console.log(resData)
      data={
        icegateId: this.icegateIdForm.value.icegateId,
        email:resData.email,
        mobile: resData.mobile
      }
      this.proceedNext.emit(data)
    },
    err=>{
      console.log(err)
      this.errorMessage= err.errors[0]
    })
   
  }
}

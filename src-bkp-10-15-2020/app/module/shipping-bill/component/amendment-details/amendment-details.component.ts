import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-amendment-details',
  templateUrl: './amendment-details.component.html',
  styleUrls: ['./amendment-details.component.scss']
})
export class AmendmentDetailsComponent implements OnInit {
  amendmentDetails:FormGroup;
  constructor( private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.amendmentDetails=this._formBuilder.group({
      site_id:['',Validators.maxLength(6)],
      request_date:[''],
      request_letter_number:['',Validators.maxLength(10)],
      indicate_type_of_amendment:['',Validators.maxLength(15)],
      reason_for_amendment:['',Validators.maxLength(2000)],
      amendment_status:['',Validators.maxLength(1)],
      unique_number_generated:['',[Validators.maxLength(7),Validators.pattern("[0-9]*$")]],


    })
  }

}

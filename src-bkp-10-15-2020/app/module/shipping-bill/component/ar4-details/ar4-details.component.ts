import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-ar4-details',
  templateUrl: './ar4-details.component.html',
  styleUrls: ['./ar4-details.component.scss']
})
export class Ar4DetailsComponent implements OnInit {

  ar4details:FormGroup;

  constructor( private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ar4details=this._formBuilder.group({
      invoice_sr_number:['',[Validators.maxLength(2),Validators.pattern("[0-9]*$")]],
      item_sr_number_invoice:['',[Validators.maxLength(4),Validators.pattern("[0-9]*$")]],
      ar4_number:['',[Validators.required,Validators.maxLength(17)]],
      ar4_date:['',Validators.required],
      commissionerate:['',[Validators.required,Validators.maxLength(20)]],
      division:['',[Validators.required,Validators.maxLength(20)]],
      range:['',[Validators.required, Validators.maxLength(20)]],
      remarks:['',Validators.maxLength(250)]
    })
  }
}

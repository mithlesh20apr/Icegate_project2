import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-rosl-details',
  templateUrl: './rosl-details.component.html',
  styleUrls: ['./rosl-details.component.scss']
})
export class RoslDetailsComponent implements OnInit {
  roslDetails:FormGroup;

 constructor( private _formBuilder: FormBuilder) { }
 
  ngOnInit(): void {
    this.roslDetails=this._formBuilder.group({
      invoice_sr_number:['',[Validators.maxLength(2),Validators.pattern("[0-9]*$")]],
      item_sr_number_invoice:['',[Validators.maxLength(4),Validators.pattern("[0-9]*$")]],
      srno:['',[Validators.maxLength(2),Validators.pattern("[0-9]*$")]],
      item_code_str_directory:['',[Validators.required,Validators.maxLength(8)]],
      amendment_type:['',Validators.maxLength(1)],
      amendment_no:['',[Validators.maxLength(7),Validators.pattern("[0-9]*$")]],
      amendment_date:[''],


    })
  }

}

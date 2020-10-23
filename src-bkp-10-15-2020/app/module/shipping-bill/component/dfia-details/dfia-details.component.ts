import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-dfia-details',
  templateUrl: './dfia-details.component.html',
  styleUrls: ['./dfia-details.component.scss']
})
export class DfiaDetailsComponent implements OnInit {
  dfiaDetails: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dfiaDetails = this._formBuilder.group({
      sion_group_code:['', [Validators.required,Validators.maxLength(3), ]],
      sion_sr_number:['', [Validators.required,Validators.maxLength(8), ]],
      sion_io_norm_sr_number:['', [Validators.required,Validators.maxLength(8), ]],
      quantity:['', [Validators.required,Validators.maxLength(13),Validators.pattern("^[0-9]+$")]],
      unit_of_measurement:['', [Validators.required,Validators.maxLength(3), ]],
      item_description:['', [Validators.maxLength(120), ]],
      technical_characteristics:['', [Validators.maxLength(250), ]],
      file_number:['', [Validators.required,Validators.maxLength(25), ]],
      license_number:['', [Validators.maxLength(10), ]],  
  });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-license-details',
  templateUrl: './license-details.component.html',
  styleUrls: ['./license-details.component.scss']
})
export class LicenseDetailsComponent implements OnInit {

  licenseDetails: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.licenseDetails = this._formBuilder.group({
      invoice_sr_number:['', [Validators.maxLength(2),Validators.pattern("^[0-9]+$")]],
      item_sr_number_in_invoice:['', [Validators.maxLength(4),Validators.pattern("^[0-9]+$")]],
      sr_no:['', [Validators.maxLength(4),Validators.pattern("^[0-9]+$")]],
      registration_number:['', [Validators.required,Validators.maxLength(25), ]],
      registration_date:['',Validators.required],
      item_sr_number_part_e:['', [Validators.required,Validators.maxLength(10), ]],
      item_sr_number_part_c:['', [Validators.required,Validators.maxLength(10), ]],
      quantity:['', [Validators.maxLength(13),Validators.pattern("^[0-9]+$")]],
      export_quantity:['', [Validators.required,Validators.maxLength(13),Validators.pattern("^[0-9]+$")]],
      whether_indigenous_imported:['', [Validators.required,Validators.maxLength(1), ]],
      amendment_type:['', [Validators.maxLength(1), ]],
      amendment_no:['', [Validators.maxLength(7), Validators.pattern("^[0-9]+$")]],
      amendment_date:['', ],
  });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl } from '@angular/forms';
import {ValidatorsService} from '../../../common/service/validators.service'
@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.scss']
})
export class PackageDetailsComponent implements OnInit {

  packageDetails: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    this.packageDetails = this._formBuilder.group({
      nature_of_cargo: [''],
      gross_weight: ['', [Validators.maxLength(17),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),13)]],
      net_weight: ['', [Validators.pattern("^[0-9]*$")]],
      unit_measurement: ['', [Validators.maxLength(3)]],
      total_number_packages: ['', [Validators.maxLength(8), Validators.pattern("^[0-9]*$")]],
      marks_and_numbers: ['', [Validators.maxLength(300)]],
      loose_packates_number: ['', [Validators.maxLength(8), Validators.pattern("^[0-9]*$")]],
      containers_number: ['', [Validators.maxLength(2), Validators.pattern("^[0-9]*$")]],
      mawb_number: ['', [Validators.maxLength(15)]],
      hawb_number: ['', [Validators.maxLength(15)]],
      amendment_type: ['', [Validators.maxLength(1)]],
      amendment_number: ['', [Validators.maxLength(7), Validators.pattern("^[0-9]*$")]],
      amendment_date: [''],
      gstn_type: ['', [Validators.maxLength(3), Validators.required]],
      gstn_id: ['', [Validators.maxLength(20), Validators.required]]
    });
  }
  
}

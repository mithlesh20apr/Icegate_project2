import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators  } from '@angular/forms';
@Component({
  selector: 'app-depb-parent-details',
  templateUrl: './depb-parent-details.component.html',
  styleUrls: ['./depb-parent-details.component.scss']
})
export class DepbParentDetailsComponent implements OnInit {
  depbParentDetails: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.depbParentDetails= this._formBuilder.group({
      sr_no:['', [Validators.maxLength(2),Validators.pattern("^[0-9]+$")]],
      unit_quantity_code:['', [Validators.required,Validators.maxLength(3)]],
      quantity_percentage:['', [Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]],
  });
  }

}

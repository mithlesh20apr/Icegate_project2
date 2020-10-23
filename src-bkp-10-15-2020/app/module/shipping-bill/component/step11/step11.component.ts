import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-step11',
  templateUrl: './step11.component.html',
  styleUrls: ['./step11.component.scss']
})
export class Step11Component implements OnInit {

  sbReExportDetails: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.sbReExportDetails = this._formBuilder.group({
      invoice_serial_no: ['', [Validators.maxLength(5), Validators.pattern("[0-9]*$")]],
      item_serial_no: ['', [Validators.maxLength(4), Validators.pattern("[0-9]*$")]],
      serial_no: ['', [Validators.required, Validators.maxLength(4), Validators.pattern("[0-9]*$")]],
      be_site:['',[Validators.required,Validators.maxLength(6)]],
      be_no: ['', [Validators.required,Validators.maxLength(7), Validators.pattern("[0-9]*$")]],
      be_date:['',Validators.required],
      be_invoice_no:['', [Validators.required,Validators.maxLength(5), Validators.pattern("[0-9]*$")]],
      be_item:['', [Validators.required,Validators.maxLength(4), Validators.pattern("[0-9]*$")]],
      manual_be:['',Validators.required],
      be_quantity_utilised:['', [Validators.required,Validators.maxLength(16), Validators.pattern("[0-9]*$")]],
      be_item_description:['',[Validators.required,Validators.maxLength(120)]],
      be_quantity:['', [Validators.required,Validators.maxLength(16), Validators.pattern("[0-9]*$")]],
      be_uqc:['',[Validators.required,Validators.maxLength(3)]],
      be_assessed_value:['', [Validators.required,Validators.maxLength(16), Validators.pattern("[0-9]*$")]],
      be_duty_paid:['', [Validators.required,Validators.maxLength(16), Validators.pattern("[0-9]*$")]],
      be_duty_payment_date:['',Validators.required],
      be_other_identifiable_parameter:['',[Validators.required,Validators.maxLength(250)]],
      be_assessed_value_claim:['', [Validators.required,Validators.maxLength(16), Validators.pattern("[0-9]*$")]],
      be_item_used:['',Validators.required],
      commisioner_permission:['',Validators.required],
      input_credit:['',Validators.required],
      personal_used:['',Validators.required],
      modvat_availed:['',Validators.required],
      modvat_repaid:['',Validators.required],
    });
  }

}

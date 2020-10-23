import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step10',
  templateUrl: './step10.component.html',
  styleUrls: ['./step10.component.scss']
})
export class Step10Component implements OnInit {

  supportingDocumentsDetails: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.supportingDocumentsDetails = this._formBuilder.group({
      invoice_serial_no: ['', [Validators.maxLength(5), Validators.pattern("[0-9]*$")]],
      item_serial_no: ['', [Validators.maxLength(4), Validators.pattern("[0-9]*$")]],
      serial_no: ['', [Validators.required, Validators.maxLength(4), Validators.pattern("[0-9]*$")]],
      image_reference_number: ['', [Validators.required, Validators.maxLength(16)]],
      document_type_code: ['', [Validators.required, Validators.maxLength(6)]],
      document_issuing_party_code: ['', [Validators.maxLength(35)]],
      document_issuing_party_name_address1: ['', [Validators.maxLength(70)]],
      document_issuing_party_name_address2: ['', [Validators.maxLength(70)]],
      document_issuing_party_name_city: ['', [Validators.maxLength(35)]],
      document_issuing_party_name_pin: ['', [Validators.maxLength(10)]],
      document_reference_number: ['', [Validators.maxLength(17)]],
      place_of_issue: ['', [Validators.required, Validators.maxLength(35)]],
      document_issue_date: ['', Validators.required],
      document_expiry_date: ['',Validators.required],
      document_beneficiary_party_code: ['', Validators.maxLength(35)],
      document_beneficiary_party_name_address1: ['', Validators.maxLength(70)],
      document_beneficiary_party_name_address2: ['', Validators.maxLength(70)],
      document_beneficiary_party_name_city: ['', Validators.maxLength(35)],
      document_beneficiary_party_name_pin: ['', Validators.maxLength(10)],
      file_type: ['', [Validators.required, Validators.maxLength(5)]],
      icegate_user_id:['', [Validators.required,Validators.maxLength(15)]],
      document_issuing_party_name:['', [Validators.required,Validators.maxLength(70)]],
      document_beneficiary_party_name:['', [Validators.required,Validators.maxLength(70)]],
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step9',
  templateUrl: './step9.component.html',
  styleUrls: ['./step9.component.scss']
})
export class Step9Component implements OnInit {

  swDeclarationDetails: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.swDeclarationDetails = this._formBuilder.group({
      site_id: ['', Validators.maxLength(6)],
      invoice_serial_no: ['', [Validators.maxLength(5), Validators.pattern("[0-9]*$")]],
      item_serial_no: ['', [Validators.maxLength(4), Validators.pattern("[0-9]*$")]],
      serial_no: ['', [Validators.required, Validators.maxLength(4), Validators.pattern("[0-9]*$")]],
      info_type: ['',[Validators.required, Validators.maxLength(3)]],
      info_qualifier: ['', [Validators.required,Validators.maxLength(100)]],
      info_code: ['',[Validators.required, Validators.maxLength(100)]],
      info_text: ['', [Validators.required, Validators.maxLength(100)]],
      info_msr: ['', [Validators.maxLength(16), Validators.pattern("[0-9]*$")]],
      info_uqc: ['', [Validators.required, Validators.maxLength(100)]],
      constituent_element_name: ['', [Validators.required, Validators.maxLength(256)]],
      constituent_code: ['', [Validators.required, Validators.maxLength(17)]],
      constituent_percentage: ['', [Validators.required, Validators.maxLength(6), Validators.pattern("[0-9]*$")]],
      constituent_yield_percentage: ['', [Validators.required, Validators.maxLength(6), Validators.pattern("[0-9]*$")]],
      active_ingredient: ['', Validators.required],
      production_batch_identifier: ['', [Validators.required, Validators.maxLength(17)]],
      production_batch_quantity: ['', [Validators.required, Validators.maxLength(16), Validators.pattern("^[0-9]*$")]],
      unit_quantity_code:['', [Validators.required, Validators.maxLength(3)]],
      manufacturing_date: ['', Validators.required],
      expiry_date: ['', Validators.required],
      best_before: ['', Validators.required],
      control_type_code:['',Validators.maxLength(17)],
      control_location:['',[Validators.required,Validators.maxLength(17)]],
      control_start_date:['',Validators.required],
      control_end_date:['',Validators.required],
      control_result_code:['',[Validators.required,Validators.maxLength(17)]],
      control_result_text:['',Validators.maxLength(4000)],
      statement_type:['',[Validators.required,Validators.maxLength(3)]],
      statement_code:['',Validators.maxLength(7)],
      statement_text:['',[Validators.required,Validators.maxLength(4000)]],


    });
  }

}

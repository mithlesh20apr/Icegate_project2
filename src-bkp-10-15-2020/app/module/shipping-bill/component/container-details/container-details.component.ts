import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-container-details',
  templateUrl: './container-details.component.html',
  styleUrls: ['./container-details.component.scss']
})
export class ContainerDetailsComponent implements OnInit {

  containerDetails:FormGroup;

  constructor( private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.containerDetails=this._formBuilder.group({
      container_number:['',Validators.maxLength(15)],
      container_size:['',[Validators.required,Validators.maxLength(4)]],
      excise_seal_number:['',Validators.maxLength(35)],
      seal_date:[''],
      seal_type_indicator:['',Validators.required],
      seal_device_id:['',Validators.maxLength(35)],
      movement_document_type:['',Validators.maxLength(5)],
      movement_document_number:['',Validators.maxLength(35)],
      eqmnt_type:['',[Validators.required,Validators.maxLength(3)]],
      eqmnt_qty:['',[Validators.maxLength(8),Validators.pattern("[0-9]*$")]],
      eqmnt_qty_code:['',Validators.maxLength(3)],
    })
  }

}

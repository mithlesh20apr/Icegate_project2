import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-item-third-party-details',
  templateUrl: './item-third-party-details.component.html',
  styleUrls: ['./item-third-party-details.component.scss']
})
export class ItemThirdPartyDetailsComponent implements OnInit {

  itemThirdPartyDetails:FormGroup
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.itemThirdPartyDetails=this._formBuilder.group({
      iec:['',[Validators.required,Validators.maxLength(10)]],
      branch_serial_number:['',[Validators.required,Validators.maxLength(3),Validators.pattern("^[0-9]*$")]],
      exporter_name:['',[Validators.maxLength(50),Validators.required]],
      address1:['',[Validators.maxLength(35),Validators.required]],
      address2:['',Validators.maxLength(35)],   
      city:['',[Validators.maxLength(35),Validators.required]],   
      state:['',Validators.maxLength(25)],   
      pin:['',[Validators.maxLength(6),Validators.pattern("[0-9]*$")]],
      gstn_type:['',Validators.required],
      gstn_id:['',[Validators.required,Validators.maxLength(20)]]
    })
  }

}

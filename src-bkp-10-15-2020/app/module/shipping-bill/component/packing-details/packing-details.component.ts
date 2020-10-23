import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-packing-details',
  templateUrl: './packing-details.component.html',
  styleUrls: ['./packing-details.component.scss']
})
export class PackingDetailsComponent implements OnInit {
    packingDetails: FormGroup;
  constructor( private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.packingDetails=this._formBuilder.group({
      packing_number_from:['',[Validators.required,Validators.maxLength(5),Validators.pattern("[0-9]*$")]],
      packing_number_to:['',[Validators.required,Validators.maxLength(5),Validators.pattern("[0-9]*$")]],
      packing_code:['',[Validators.required,Validators.maxLength(3)]],
      rotation_date:['',Validators.required],
      rotation_number:['',[Validators.required,Validators.maxLength(7),Validators.pattern("[0-9]*$")]],
      factory_stuffed:['',Validators.required],
      sample_accompanied:['',Validators.required],
      
    })
  }

}

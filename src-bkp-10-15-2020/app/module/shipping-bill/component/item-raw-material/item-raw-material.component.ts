import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-item-raw-material',
  templateUrl: './item-raw-material.component.html',
  styleUrls: ['./item-raw-material.component.scss']
})
export class ItemRawMaterialComponent implements OnInit {

  itemRawMaterialDetails:FormGroup
  
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.itemRawMaterialDetails=this._formBuilder.group({
      raw_material_code: ['', [Validators.required,Validators.maxLength(2), Validators.pattern("[0-9]*$")]],
      quantity: ['', [Validators.required,Validators.maxLength(13), Validators.pattern("[0-9]*$")]],

    })
  }

}

import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-item-accessories',
  templateUrl: './item-accessories.component.html',
  styleUrls: ['./item-accessories.component.scss']
})
export class ItemAccessoriesComponent implements OnInit {

  itemAccessoriesDetails:FormGroup;
 
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.itemAccessoriesDetails=this._formBuilder.group({
      description:['',[Validators.required,Validators.maxLength(500)]]
    })
  }

}

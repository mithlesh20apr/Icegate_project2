import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-item-cess',
  templateUrl: './item-cess.component.html',
  styleUrls: ['./item-cess.component.scss']
})
export class ItemCessComponent implements OnInit {

  itemCessDetails:FormGroup
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.itemCessDetails=this._formBuilder.group({
      srno: ['', [Validators.maxLength(2), Validators.pattern("[0-9]*$")]],
      cess_act_code:['',[Validators.required,Validators.maxLength(10)]],
      quantity: ['', [Validators.maxLength(11), Validators.pattern("[0-9]*$")]],
    })
  }

}

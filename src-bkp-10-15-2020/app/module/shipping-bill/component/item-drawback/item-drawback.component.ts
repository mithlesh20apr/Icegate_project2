import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-item-drawback',
  templateUrl: './item-drawback.component.html',
  styleUrls: ['./item-drawback.component.scss']
})
export class ItemDrawbackComponent implements OnInit {
  itemDrawbackDetails:FormGroup
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.itemDrawbackDetails=this._formBuilder.group({
      dbk_schedule_number: ['', [Validators.required,Validators.maxLength(15)]],
      drawback_quantity:['', [Validators.maxLength(11), Validators.pattern("[0-9]*$")]],

    })
  }

}

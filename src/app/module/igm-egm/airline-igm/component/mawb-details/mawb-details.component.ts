import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {HawbDetailsComponent} from '../hawb-details/hawb-details.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service';

@Component({
  selector: 'app-mawb-details',
  templateUrl: './mawb-details.component.html',
  styleUrls: ['./mawb-details.component.scss']
})
export class MawbDetailsComponent implements OnInit {
  mawbDetails: FormGroup;

  constructor( public _dialog: MatDialog, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.mawbDetails= this._formBuilder.group({
  
      uld_number:['',[Validators.maxLength(15),Validators.required]],
      mawb_no:['',[Validators.maxLength(20),Validators.required]],
      mawb_date:[''],
      port_origin:['',[Validators.maxLength(3),Validators.required]],
      port_destination:['',[Validators.maxLength(3),Validators.required]],
      shippment_type:['',[Validators.maxLength(1),Validators.required]],
      total_packages:['',[ValidatorsService.numberValidator,Validators.maxLength(8),Validators.required]],
      gross_weight:['',[Validators.maxLength(13),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),9),Validators.required]],
      item_description:['',[Validators.maxLength(30),Validators.required]],
      special_handling_code:['',[Validators.maxLength(15)]],
    })

  }

  openDialog(){
    let dialogRef = this._dialog.open(HawbDetailsComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}

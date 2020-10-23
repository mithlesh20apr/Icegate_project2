import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {HawbDetailsComponent} from '../hawb-details/hawb-details.component'
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

      mawb_no:['',Validators.maxLength(20)],
      mawb_date:[''],
      port_loading:['',[Validators.maxLength(3),Validators.required]],
      port_destination:['',[Validators.maxLength(3),Validators.required]],
      shippment_type:['',[Validators.maxLength(1),Validators.required]],
      total_packages:['',[ValidatorsService.numberValidator,Validators.maxLength(5),Validators.required]],
      gross_weight:['',[Validators.maxLength(17),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),13),Validators.required]],
      item_description:['',[Validators.maxLength(60),Validators.required]],

    })

  }

  openDialog(){
    let dialogRef = this._dialog.open(HawbDetailsComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}

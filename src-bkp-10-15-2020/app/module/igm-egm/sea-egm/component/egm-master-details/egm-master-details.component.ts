import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {EgmContainerDetailsComponent} from '../egm-container-details/egm-container-details.component'
@Component({
  selector: 'app-egm-master-details',
  templateUrl: './egm-master-details.component.html',
  styleUrls: ['./egm-master-details.component.scss']
})
export class EgmMasterDetailsComponent implements OnInit {

  egmMasterDetails: FormGroup;
  constructor(private _formBuilder: FormBuilder,public _dialog: MatDialog) { }

  ngOnInit(): void {
    this.egmMasterDetails=this._formBuilder.group({

      message_type:['',],
      custom_house_code:['',],
      egm_no:['',],
      egm_date:['',],
      sb_no:['',],
      sb_date:['',],
      port_where_sb_filed:['',],
      port_of_destination:['',],
      nature_of_cargo:['',],
      gateway_port:['',],
      no_of_packages:['',]
      
    })
  }

  openDialog(){
    let dialogRef = this._dialog.open(EgmContainerDetailsComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EgmContainerDetailsComponent } from '../egm-container-details/egm-container-details.component'
import { ValidatorsService } from '../../../../common/service/validators.service'
@Component({
  selector: 'app-egm-master-details',
  templateUrl: './egm-master-details.component.html',
  styleUrls: ['./egm-master-details.component.scss']
})
export class EgmMasterDetailsComponent implements OnInit {

  egmMasterDetails: FormGroup;
  value
  constructor(private _formBuilder: FormBuilder, public _dialog: MatDialog) { }

  ngOnInit(): void {
    this.egmMasterDetails = this._formBuilder.group({
      message_type: ['', [Validators.maxLength(1), ]],
      custom_house_code: ['', [Validators.maxLength(6), ]],
      egm_no: ['', [Validators.maxLength(7), ValidatorsService.numberValidator]],
      egm_date: ['', []],
      // sb_no: ['', [Validators.maxLength(7), ValidatorsService.numberValidator]],
      // sb_date: ['', []],
      // port_where_sb_filed: ['', [Validators.maxLength(6),  Validators.required]],
      // port_of_destination: ['', [Validators.maxLength(6),  Validators.required]],
      // nature_of_cargo: ['', [Validators.maxLength(2),  Validators.required]],
      // gateway_port: ['', [Validators.maxLength(6),  Validators.required]],
      // no_of_packages: ['', [Validators.maxLength(8), ValidatorsService.numberValidator]],
      // no_of_packages_nc: ['', [Validators.maxLength(8), ValidatorsService.numberValidator,Validators.required]]
    })
  }

  openDialog() {
    let dialogRef = this._dialog.open(EgmContainerDetailsComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  choose(event) {
    this.value=event.value
    console.log("Event", event)
  }

}

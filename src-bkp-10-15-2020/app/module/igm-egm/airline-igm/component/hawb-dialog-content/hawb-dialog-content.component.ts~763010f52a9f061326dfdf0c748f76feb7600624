import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service';
@Component({
  selector: 'app-hawb-dialog-content',
  templateUrl: './hawb-dialog-content.component.html',
  styleUrls: ['./hawb-dialog-content.component.scss']
})
export class HawbDialogContentComponent implements OnInit {

  hawbDetails:FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.hawbDetails= this._formBuilder.group({
      hawb_no:['',[ValidatorsService.alpaNumValidator,Validators.maxLength(20),Validators.required]],
      hawb_date:[''],
      port_origin:['',[ValidatorsService.alpaNumValidator,Validators.maxLength(3),Validators.required]],
      port_destination:['',[ValidatorsService.alpaNumValidator,Validators.maxLength(3),Validators.required]],
      shippment_type:['',[ValidatorsService.alpaNumValidator,Validators.maxLength(1),Validators.required]],
      total_packages:['',[ValidatorsService.numberValidator,Validators.maxLength(8),Validators.required]],
      gross_weight:['',[Validators.maxLength(13),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),9),Validators.required]],
      item_description:['',[ValidatorsService.alpaNumValidator,Validators.maxLength(30),Validators.required]],
      special_handling_code:['',[ValidatorsService.alpaNumValidator,Validators.maxLength(15)]],
    })
  }


}

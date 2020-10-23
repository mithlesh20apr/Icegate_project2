import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service'
@Component({
  selector: 'app-container-dialog-content',
  templateUrl: './container-dialog-content.component.html',
  styleUrls: ['./container-dialog-content.component.scss']
})
export class ContainerDialogContentComponent implements OnInit {

  containerDetails: FormGroup;
 

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.containerDetails=this._formBuilder.group({
      line_no:['',[Validators.maxLength(4),ValidatorsService.numberValidator]],
      sub_line_no:['',[Validators.maxLength(4),ValidatorsService.numberValidator]],
      container_no:['',[Validators.maxLength(11),Validators.required]],
      container_seal_no:['',[Validators.maxLength(15)]],
      container_agent_code:['',[Validators.maxLength(16)]],
      container_status:['',[Validators.maxLength(3),Validators.required]],
      total_no_of_packages_in_container:['',[Validators.maxLength(8),ValidatorsService.numberValidator]],
      container_weight:['',[Validators.maxLength(17),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),14)]],
      iso_code:['',[Validators.maxLength(4),Validators.required]],
      soc_flag:['',[Validators.maxLength(1),Validators.required]],
    })
  }


}

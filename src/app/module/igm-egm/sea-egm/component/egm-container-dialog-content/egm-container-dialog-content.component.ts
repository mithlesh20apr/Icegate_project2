import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service'
@Component({
  selector: 'app-egm-container-dialog-content',
  templateUrl: './egm-container-dialog-content.component.html',
  styleUrls: ['./egm-container-dialog-content.component.scss']
})
export class EgmContainerDialogContentComponent implements OnInit {

  egmContainerDetails: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.egmContainerDetails=this._formBuilder.group({
      container_no:['',[Validators.maxLength(11),]],
      container_status:['',[Validators.maxLength(1),]],
    })
  }

}

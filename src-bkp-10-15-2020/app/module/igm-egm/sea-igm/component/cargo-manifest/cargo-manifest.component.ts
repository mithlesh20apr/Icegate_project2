import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {ContainerDetailsComponent} from '../container-details/container-details.component'
import {ValidatorsService} from '../../../../common/service/validators.service'

@Component({
  selector: 'app-cargo-manifest',
  templateUrl: './cargo-manifest.component.html',
  styleUrls: ['./cargo-manifest.component.scss']
})
export class CargoManifestComponent implements OnInit {
  cargoManifest: FormGroup;
  constructor(private _formBuilder: FormBuilder,public _dialog: MatDialog) { }

  ngOnInit(): void {
    this.cargoManifest=this._formBuilder.group({

      line_no:['',[Validators.maxLength(4),ValidatorsService.numberValidator]],
      sub_line_no:['',[Validators.maxLength(4),ValidatorsService.numberValidator,Validators.required]],
      bl_no:['',[Validators.maxLength(20),ValidatorsService.alpaNumValidator,Validators.required]],
      bl_date:['',[ValidatorsService.alpaNumValidator,Validators.required]],
      port_of_loading:['',[Validators.maxLength(6),ValidatorsService.alpaNumValidator,Validators.required]],
      port_of_destination:['',[Validators.maxLength(6),ValidatorsService.alpaNumValidator,Validators.required]],
      house_bl_no:['',[Validators.maxLength(20),ValidatorsService.alpaNumValidator]],
      house_bl_date:['',[ValidatorsService.alpaNumValidator]],
      importer_name:['',[Validators.maxLength(35),ValidatorsService.alpaNumValidator,Validators.required]],
      address1:['',[Validators.maxLength(35),Validators.required]],
      address2:['',[Validators.maxLength(35),Validators.required]],
      address3:['',[Validators.maxLength(35)]],
      name_of_other_notified_party:['',[Validators.maxLength(35),ValidatorsService.alpaNumValidator]],
      nature_of_cargo:['',[Validators.maxLength(2),ValidatorsService.alpaNumValidator,Validators.required]],
      item_type:['',[Validators.maxLength(2),ValidatorsService.alpaNumValidator]],
      cargo_movement:['',[Validators.maxLength(2),ValidatorsService.alpaNumValidator,Validators.required]],
      port_of_discharge:['',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]],
      number_of_packages:['',[Validators.maxLength(8),ValidatorsService.numberValidator,Validators.required]],
      type_of_packages:['',[Validators.maxLength(3),ValidatorsService.alpaNumValidator,Validators.required]],
      gross_weight:['',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),12),Validators.required]],
      unit_of_weight:['',[Validators.maxLength(3),ValidatorsService.alpaNumValidator,Validators.required]],
      gross_vol:['',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),12)]],
      unit_of_vol:['',[Validators.maxLength(3),ValidatorsService.alpaNumValidator]],
      marks_of_numbers:['',[Validators.maxLength(300),ValidatorsService.alpaNumValidator,Validators.required]],
      goods_description:['',[Validators.maxLength(250),ValidatorsService.alpaNumValidator,Validators.required]],
      uno_code:['',[Validators.maxLength(5),ValidatorsService.alpaNumValidator,Validators.required]],
      imo_code:['',[Validators.maxLength(3),ValidatorsService.alpaNumValidator,Validators.required]],
      transit_bond_no:['',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]],
      carrier_code:['',[Validators.maxLength(10),ValidatorsService.alpaNumValidator]],
      mode_of_transport:['',[Validators.maxLength(1),ValidatorsService.alpaNumValidator]],
      mlo_code:['',[Validators.maxLength(16),ValidatorsService.alpaNumValidator]],
  
    })
  }

  openDialog(){
    let dialogRef = this._dialog.open(ContainerDetailsComponent, {disableClose: true});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}

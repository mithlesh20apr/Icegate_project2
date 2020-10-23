import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {ContainerDetailsComponent} from '../container-details/container-details.component'
import {ValidatorsService} from '../../../../common/service/validators.service'

@Component({
  selector: 'app-cargo-manifest',
  templateUrl: './cargo-manifest.component.html',
  styleUrls: ['./cargo-manifest.component.scss']
})
export class CargoManifestComponent implements OnInit {
  tabs = [1];
  selected = new FormControl(0);
  cargoManifest: FormGroup;
  constructor(private _formBuilder: FormBuilder,public _dialog: MatDialog) { }

  ngOnInit(): void {
    this.cargoManifest=this._formBuilder.group({

      line_no:['',[Validators.maxLength(4),ValidatorsService.numberValidator]],
      sub_line_no:['',[Validators.maxLength(4),ValidatorsService.numberValidator,Validators.required]],
      bl_no:['',[Validators.maxLength(20),Validators.required]],
      bl_date:['',[Validators.required]],
      port_of_loading:['',[Validators.maxLength(6),Validators.required]],
      port_of_destination:['',[Validators.maxLength(6),Validators.required]],
      // house_bl_no:['',[Validators.maxLength(20)]],
      // house_bl_date:['',[ValidatorsService.alpaNumValidator]],
      importer_name:['',[Validators.maxLength(35),Validators.required]],
      address1:['',[Validators.maxLength(35),Validators.required]],
      address2:['',[Validators.maxLength(35),Validators.required]],
      address3:['',[Validators.maxLength(35)]],
      name_of_other_notified_party:['',[Validators.maxLength(35)]],
      address_1:['',[Validators.maxLength(35)]],
      address_2:['',[Validators.maxLength(35)]],
      address_3:['',[Validators.maxLength(35)]],
      nature_of_cargo:['',[Validators.maxLength(2),Validators.required]],
      item_type:['',[Validators.maxLength(2)]],
      cargo_movement:['',[Validators.maxLength(2),Validators.required]],
      port_of_discharge:['',[Validators.maxLength(10)]],
      number_of_packages:['',[Validators.maxLength(8),ValidatorsService.numberValidator,Validators.required]],
      type_of_packages:['',[Validators.maxLength(3),Validators.required]],
      gross_weight:['',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),12),Validators.required]],
      unit_of_weight:['',[Validators.maxLength(3),Validators.required]],
      gross_vol:['',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),12)]],
      unit_of_vol:['',[Validators.maxLength(3)]],
      marks_of_numbers:['',[Validators.maxLength(300),Validators.required]],
      goods_description:['',[Validators.maxLength(250),Validators.required]],
      uno_code:['',[Validators.maxLength(5),Validators.required]],
      imo_code:['',[Validators.maxLength(3),Validators.required]],
      transit_bond_no:['',[Validators.maxLength(10)]],
      carrier_code:['',[Validators.maxLength(10)]],
      mode_of_transport:['',[Validators.maxLength(1)]],
      mlo_code:['',[Validators.maxLength(16)]],  
    })
  }

  openDialog(){
    // let dialogRef = this._dialog.open(ContainerDetailsComponent, {disableClose: true});
    let dialogRef = this._dialog.open(ContainerDetailsComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }


  addTab() {
    this.tabs.push(this.tabs.length);
    this.selected.setValue(this.tabs.length);
    // if(this.tabs.length == 3){
    //   this.disableAddButton = true;
    // }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
    // if(this.tabs.length < 3){
    //   this.disableAddButton = false;
    // }
  }
}

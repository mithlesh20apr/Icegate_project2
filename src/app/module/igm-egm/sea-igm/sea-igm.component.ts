import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sea-igm',
  templateUrl: './sea-igm.component.html',
  styleUrls: ['./sea-igm.component.scss']
})
export class SeaIgmComponent implements OnInit {

  tabs = [1];
  selected = new FormControl(0);
  disableAddButton = false;
  downloadJsonHref
  @ViewChild('stepper') private myStepper: MatStepper;
  constructor(private router: Router,private _fb: FormBuilder,private sanitizer: DomSanitizer) { }
  sea_igm: FormGroup;

  ngOnInit(): void {
    this.sea_igm=this._fb.group({
      seaIgmStep1: new FormControl(""),
      seaIgmStep2: new FormControl(""),
    })
  }

  addTab() {
    this.tabs.push(this.tabs.length);
    this.selected.setValue(this.tabs.length);
    if(this.tabs.length == 3){
      this.disableAddButton = true;
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
    if(this.tabs.length < 3){
      this.disableAddButton = false;
    }
  }
  selectionChange($event) {
    if ($event.selectedIndex == 2 || $event.selectedIndex == 3 || $event.selectedIndex == 4) {
    }
  }

  public onFormSubmit(){
    console.log( this.sea_igm.value); 
  }

  onSubmit() {
    this.myStepper.next();
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    var filePath = file.name;
    var allowedExtensions = /(\.json)$/i; 
    const fileReader = new FileReader();
     fileReader.readAsText(file, "UTF-8");
     fileReader.onload = () => {
       if (!allowedExtensions.exec(filePath)) { 
         Swal.fire({
           icon: 'error',
           title: 'Oops...',
           text: 'Only Json file is allowed',
          
         }).then((result) => {
           event.target.value = '';
         })
        
       }else{
         Swal.fire({
           title: 'This file is valid',
           text: "If You want upload it.Click ok button",
           icon: 'success',
           showCancelButton: true,
           confirmButtonColor: '#3085d6',
           cancelButtonColor: '#d33',
           confirmButtonText: 'Yes, upload it!'
         }).then((result) => {
           if (result.isConfirmed) {  
           var data = JSON.parse(fileReader.result as string);
          console.log(data);
           this.sea_igm.patchValue({
              seaIgmStep1:{
                message_type:data.seaIgmStep1.message_type,
                custom_house_code:data.seaIgmStep1.custom_house_code,
                imo_code_of_vessel:data.seaIgmStep1.imo_code_of_vessel,
                vessel_code:data.seaIgmStep1.vessel_code,
                voyage_no:data.seaIgmStep1.voyage_no,
                shipping_line_code:data.seaIgmStep1.shipping_line_code,
                shipping_agent_code:data.seaIgmStep1.shipping_agent_code,
                master_name:data.seaIgmStep1.master_name,
                port_of_arrival:data.seaIgmStep1.port_of_arrival,
                last_port_called:data.seaIgmStep1.last_port_called,
                port_called_prior_sno_12:data.seaIgmStep1.port_called_prior_sno_12,
                port_called_prior_sno_13:data.seaIgmStep1.port_called_prior_sno_13,
                vessel_type:data.seaIgmStep1.vessel_type,
                total_no_of_lines:data.seaIgmStep1.total_no_of_lines,
                brief_cargo_description:data.seaIgmStep1.brief_cargo_description,
                expected_date_and_time:data.seaIgmStep1.expected_date_and_time,
                light_house_dues:data.seaIgmStep1.light_house_dues,
                same_bottom_cargo:data.seaIgmStep1.same_bottom_cargo,
                ship_stores_declaration:data.seaIgmStep1.ship_stores_declaration,
                crew_list_declaration:data.seaIgmStep1.crew_list_declaration,
                maritime_declaration:data.seaIgmStep1.maritime_declaration,
                terminal_operator_code:data.seaIgmStep1.terminal_operator_code,
                passenger_list:data.seaIgmStep1.passenger_list,
                crew_effect_declaration:data.seaIgmStep1.crew_effect_declaration,
               },
               seaIgmStep2:{
                line_no:data.seaIgmStep2.line_no,
                sub_line_no:data.seaIgmStep2.sub_line_no,
                bl_no:data.seaIgmStep2.bl_no,
                bl_date:data.seaIgmStep2.bl_date,
                port_of_loading:data.seaIgmStep2.port_of_loading,
                port_of_destination:data.seaIgmStep2.port_of_destination,
                importer_name:data.seaIgmStep2.importer_name,
                importer_address1:data.seaIgmStep2.importer_address1,
                importer_address2:data.seaIgmStep2.importer_address2,
                importer_address3:data.seaIgmStep2.importer_address3,
                name_of_other_notified_party:data.seaIgmStep2.name_of_other_notified_party,
                address_1:data.seaIgmStep2.address_1,
                address_2:data.seaIgmStep2.address_2,
                address_3:data.seaIgmStep2.address_3,
                nature_of_cargo:data.seaIgmStep2.nature_of_cargo,
                item_type:data.seaIgmStep2.item_type,
                cargo_movement:data.seaIgmStep2.cargo_movement,
                port_of_discharge:data.seaIgmStep2.port_of_discharge,
                number_of_packages:data.seaIgmStep2.number_of_packages,
                type_of_packages:data.seaIgmStep2.type_of_packages,
                gross_weight:data.seaIgmStep2.gross_weight,
                unit_of_weight:data.seaIgmStep2.unit_of_weight,
                gross_vol:data.seaIgmStep2.gross_vol,
                unit_of_vol:data.seaIgmStep2.unit_of_vol,
                marks_of_numbers:data.seaIgmStep2.marks_of_numbers,
                goods_description:data.seaIgmStep2.goods_description,
                uno_code:data.seaIgmStep2.uno_code,
                imo_code:data.seaIgmStep1.imo_code,
                transit_bond_no:data.seaIgmStep2.transit_bond_no,
                carrier_code:data.seaIgmStep2.carrier_code,
                mode_of_transport:data.seaIgmStep2.mode_of_transport,
                mlo_code:data.seaIgmStep2.mlo_code,
               

               }   
           }, );
         }
         });
     }
     }
     fileReader.onerror = (error) => {
       console.log(error);
     }
  
   }

  downloadseaigm() { 
    let formObj = this.sea_igm.getRawValue();
    let serializedForm = JSON.stringify(formObj);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(serializedForm));
    this.downloadJsonHref = uri;
   // console.log(serializedForm);
  }
}

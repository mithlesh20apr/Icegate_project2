import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sea-egm',
  templateUrl: './sea-egm.component.html',
  styleUrls: ['./sea-egm.component.scss']
})
export class SeaEgmComponent implements OnInit {
  tabs = [1];
  selected = new FormControl(0);
  disableAddButton = false;
  sea_egm: FormGroup;
  downloadJsonHref
  @ViewChild('stepper') private myStepper: MatStepper;
  constructor(private router: Router,private _fb: FormBuilder,private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    this.sea_egm=this._fb.group({
      seaEgmStep1: new FormControl(""),
      seaEgmStep2: new FormControl(""),
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
    console.log( this.sea_egm.value); 
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
           this.sea_egm.patchValue({
              seaEgmStep1:{
                message_type:data.seaEgmStep1.message_type,
                custom_house_code:data.seaEgmStep1.custom_house_code,
                egm_no:data.seaEgmStep1.egm_no,
                egm_date:data.seaEgmStep1.egm_date,
               },
               seaEgmStep2:{
                sb_no:data.seaEgmStep2.sb_no,
                sb_date:data.seaEgmStep2.sb_date,
                port_where_sb_filed:data.seaEgmStep2.port_where_sb_filed,
                port_of_destination:data.seaEgmStep2.port_of_destination,
                nature_of_cargo:data.seaEgmStep2.nature_of_cargo,
                gateway_port:data.seaEgmStep2.gateway_port,
                no_of_packages:data.seaEgmStep2.no_of_packages,
                no_of_packages_nc:data.seaEgmStep2.no_of_packages_nc
               
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

   downloadseaegm() { 
    let formObj = this.sea_egm.getRawValue();
    let serializedForm = JSON.stringify(formObj);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(serializedForm));
    this.downloadJsonHref = uri;
   // console.log(serializedForm);
  }

}

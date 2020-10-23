import { Component, OnInit, EventEmitter,Output,ViewChild  } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Subject, BehaviorSubject } from 'rxjs';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-in-bond-bill-of-entry',
  templateUrl: './in-bond-bill-of-entry.component.html',
  styleUrls: ['./in-bond-bill-of-entry.component.scss']
})
export class InBondBillOfEntryComponent implements OnInit {
  bill_of_entrly: FormGroup; 
  dynamicArray = [1];
  flag = true;
  dynamicArray2 = [1];
  flag2 = true;
  dynamicArray3 = [1];
  flag3 = true;
  progress = 20;
  progress2 = 20;
  progress3 = 20;
  TabIndex = 0;
  TabIndex2 = 0;
  TabIndex3 = 0;
  downloadJsonHref
  //value = Boolean;
 
  constructor(private router: Router,private _fb: FormBuilder,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    
    this.bill_of_entrly = this._fb.group({
    
      inBondFormStep1: new FormControl(""),
      inBondFormStep2: new FormControl(""),
      inBondFormStep3: new FormControl(""),
      inBondFormStep4: new FormControl(""),
      inBondFormStep5: new FormControl(""),
      inBondFormStep6: new FormControl(""),
      inBondFormStep7: new FormControl(""),
      inBondFormStep8: new FormControl(""),
      inBondFormStep9: new FormControl(""),
      inBondFormStep10: new FormControl(""),
      inBondFormStep11: new FormControl(""),
      inBondFormStep12: new FormControl(""),
      inBondFormStep13: new FormControl(""),
   
     
    });

  }

  add() {
    if (this.dynamicArray.length < 5) {
      this.dynamicArray.push(this.dynamicArray.length + 1);
      this.progress = this.progress + 20;
      this.onTabChanged(this.dynamicArray.length - 1);
      this.flag = true;
    }

    else {
      this.flag = false;
    }
  }

  delete(index) {
    this.dynamicArray.splice(index, 1);
    this.progress = this.progress - 20;
    this.TabIndex = index - 1;
    if (this.dynamicArray.length < 5) {
      this.flag = true;
    }
  }

  onTabChanged(index) {
    this.TabIndex = index;
  }

  
  add2() {
    if (this.dynamicArray2.length < 5) {
      this.dynamicArray2.push(this.dynamicArray2.length + 1);
      this.progress2 = this.progress2 + 20;
      this.onTabChanged2(this.dynamicArray2.length - 1);
      this.flag2 = true;
    }

    else {
      this.flag2 = false;
    }
  }

  delete2(index) {
    this.dynamicArray2.splice(index, 1);
    this.progress2 = this.progress2 - 20;
    this.TabIndex2 = index - 1;
    if (this.dynamicArray2.length < 5) {
      this.flag2 = true;
    }
  }

  onTabChanged2(index) {
    this.TabIndex2 = index;
  }

  
  add3() {
    if (this.dynamicArray3.length < 5) {
      this.dynamicArray3.push(this.dynamicArray3.length + 1);
      this.progress3 = this.progress3 + 20;
      this.onTabChanged3(this.dynamicArray3.length - 1);
      this.flag3 = true;
    }

    else {
      this.flag3 = false;
    }
  }

  delete3(index) {
    this.dynamicArray3.splice(index, 1);
    this.progress3 = this.progress3 - 20;
    this.TabIndex3 = index - 1;
    if (this.dynamicArray3.length < 5) {
      this.flag3 = true;
    }
  }

  onTabChanged3(index) {
    this.TabIndex3 = index;
  }

  selectionChange($event) {
    if ($event.selectedIndex == 2 || $event.selectedIndex == 3 || $event.selectedIndex == 4) {
    }
  }
  // submit form of hole step part
  submitForm(){
    let formObj = this.bill_of_entrly.getRawValue();
   
    let serializedForm = JSON.stringify(formObj);
    console.log( formObj);
    
  }

// import json files code there
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
          this.bill_of_entrly.patchValue({
              inBondFormStep1: {
                custom_house_code: data.inBondFormStep1.custom_house_code,
                message_type: data.inBondFormStep1.message_type,
                branch_sr_no: data.inBondFormStep1.branch_sr_no,
                user_job_no: data.inBondFormStep1.user_job_no,
                user_job_date: data.inBondFormStep1.user_job_date,
                be_number: data.inBondFormStep1.be_number,
                be_date: data.inBondFormStep1.be_date,
                iec_code: data.inBondFormStep1.iec_code,
                name_importer: data.inBondFormStep1.name_importer,
                address1_importer: data.inBondFormStep1.address1_importer,
                address2_importer: data.inBondFormStep1.address2_importer,
                city_importer: data.inBondFormStep1.city_importer,
                state_importer: data.inBondFormStep1.state_importer,
                pin_importer: data.inBondFormStep1.pin_importer,
                pin: data.inBondFormStep1.pin,
                mode_of_transport: data.inBondFormStep1.mode_of_transport,
                importer_type: data.inBondFormStep1.importer_type,
                kachcha_be: data.inBondFormStep1.kachcha_be,
                high_sea_sale_flag: data.inBondFormStep1.high_sea_sale_flag,
                permission_code: data.inBondFormStep1.permission_code,
                reason_for_request: data.inBondFormStep1.reason_for_request,
                preceding_level: data.inBondFormStep1.preceding_level,
                invoice_serial_number: data.inBondFormStep1.invoice_serial_number,
                port_of_origin: data.inBondFormStep1.port_of_origin,
                cha_code: data.inBondFormStep1.cha_code,
                country_of_origin: data.inBondFormStep1.country_of_origin,
                country_of_consignment: data.inBondFormStep1.country_of_consignment,
                port_of_shipment: data.inBondFormStep1.port_of_shipment,
                green_channel_requested: data.inBondFormStep1.green_channel_requested,
                section: data.inBondFormStep1.section,
                prior_be: data.inBondFormStep1.prior_be,
                authorized_dealer_code: data.inBondFormStep1.authorized_dealer_code,
                first_check_requested: data.inBondFormStep1.first_check_requested,
                warehouse_code: data.inBondFormStep1.warehouse_code,
                warehouse_custom_site_id: data.inBondFormStep1.warehouse_custom_site_id,
                warehouse_be_no: data.inBondFormStep1.warehouse_be_no,
                warehouse_be_date: data.inBondFormStep1.warehouse_be_date,
                no_packages_released: data.inBondFormStep1.no_packages_released,
                package_code: data.inBondFormStep1.package_code,
                gross_weight: data.inBondFormStep1.gross_weight,
                unit_of_measurement: data.inBondFormStep1.unit_of_measuremen,
                additional_charges: data.inBondFormStep1.additional_charges,
                misc_load: data.inBondFormStep1.misc_load,
                ucr: data.inBondFormStep1.ucr,
                ucr_type: data.inBondFormStep1.ucr_type,
                payment_method_code: data.inBondFormStep1.payment_method_code

              },
              inBondFormStep2: {
                currency_code: data.inBondFormStep2.currency_code,
                standard_currency:data.inBondFormStep2.standard_currency
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
  // Download bill of entry in json format
  downloadbillentry() { 
    let formObj = this.bill_of_entrly.getRawValue();
    let serializedForm = JSON.stringify(formObj);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(serializedForm));
    this.downloadJsonHref = uri;
   // console.log(serializedForm);
  }

}

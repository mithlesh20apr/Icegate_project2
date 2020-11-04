import { Component, OnInit, EventEmitter,Output,ViewChild } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Subject, BehaviorSubject } from 'rxjs';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { MatStepper } from '@angular/material/stepper';


@Component({
  selector: 'app-airline-igm',
  templateUrl: './airline-igm.component.html',
  styleUrls: ['./airline-igm.component.scss']
})
export class AirlineIgmComponent implements OnInit {
  airline_igm:FormGroup;
  tabs = [1];
  selected = new FormControl(0);
  disableAddButton = false;
  downloadJsonHref
  @ViewChild('stepper') private myStepper: MatStepper;
  constructor(private router: Router,private _fb: FormBuilder,private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
 
    this.airline_igm=this._fb.group({
      airlineIgmStep1: new FormControl(""),
      airlineIgmStep2: new FormControl(""),
    })
  }

  addTab() {
    this.tabs.push(this.tabs.length);
    this.selected.setValue(this.tabs.length);
    if(this.tabs.length == 3){
      // this.disableAddButton = true;
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
    if(this.tabs.length < 3){
      // this.disableAddButton = false;
    }
  }
  selectionChange($event) {
    if ($event.selectedIndex == 2 || $event.selectedIndex == 3 || $event.selectedIndex == 4) {
    }
  }

  public onFormSubmit(){
    console.log( this.airline_igm.value); 
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
           this.airline_igm.patchValue({
              airlineIgmStep1:{
                message_type:data.airlineIgmStep1.message_type,
                custom_house_code:data.airlineIgmStep1.custom_house_code,
                flight_no:data.airlineIgmStep1.flight_no,
                flight_origin_date:data.airlineIgmStep1.flight_origin_date,
                expected_date_time_arrival:data.airlineIgmStep1.expected_date_time_arrival,
                port_origin:data.airlineIgmStep1.port_origin,
                port_destination:data.airlineIgmStep1.port_destination,
                registration_no:data.airlineIgmStep1.registration_no,
                nil_cargo_flight:data.airlineIgmStep1.nil_cargo_flight,
               },
               airlineIgmStep2:{
                uld_number:data.airlineIgmStep2.uld_number,
                mawb_no:data.airlineIgmStep2.mawb_no,
                mawb_date:data.airlineIgmStep2.mawb_date,
                port_origin:data.airlineIgmStep2.port_origin,
                port_destination:data.airlineIgmStep2.port_destination,
                shippment_type:data.airlineIgmStep2.shippment_type,
                total_packages:data.airlineIgmStep2.total_packages,
                gross_weight:data.airlineIgmStep2.gross_weight,
                item_description:data.airlineIgmStep2.item_description,
                special_handling_code:data.airlineIgmStep2.special_handling_code,
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
  
 
    
  
  
  downloadairlineigm() { 
    let formObj = this.airline_igm.getRawValue();
    let serializedForm = JSON.stringify(formObj);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(serializedForm));
    this.downloadJsonHref = uri;
   // console.log(serializedForm);
  }
 
}

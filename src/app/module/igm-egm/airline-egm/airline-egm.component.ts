import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, BehaviorSubject } from 'rxjs';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { MatStepper } from '@angular/material/stepper';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-airline-egm',
  templateUrl: './airline-egm.component.html',
  styleUrls: ['./airline-egm.component.scss']
})
export class AirlineEgmComponent implements OnInit {
  airline_egm: FormGroup; 
  tabs = [1];
  selected = new FormControl(0);
  disableAddButton = false;
  downloadJsonHref
  @ViewChild('stepper') private myStepper: MatStepper;
  constructor(private router: Router,private _fb: FormBuilder,private sanitizer: DomSanitizer) { }


  ngOnInit(): void { 
    this.airline_egm=this._fb.group({
      airlineEgmStep1: new FormControl(""),
      airlineEgmStep2: new FormControl(""),
    })

  }

  selectionChange($event) {
    if ($event.selectedIndex == 2 || $event.selectedIndex == 3 || $event.selectedIndex == 4) {
    }
  }

  public onFormSubmit(){
    console.log( this.airline_egm.value); 
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
         this.airline_egm.patchValue({
            
             airlineEgmStep1:{
              message_type:data.airlineEgmStep1.message_type,
              custom_house_code:data.airlineEgmStep1.custom_house_code,
              flight_no:data.airlineEgmStep1.flight_no,
              flight_origin_date:data.airlineEgmStep1.flight_origin_date,
              egm_no:data.airlineEgmStep1.egm_no,
              egm_date:data.airlineEgmStep1.egm_date,
              port_origin:data.airlineEgmStep1.port_origin,
              port_destination:data.airlineEgmStep1.port_destination,
              registration_no:data.airlineEgmStep1.registration_no,
              nil_cargo_flight:data.airlineEgmStep1.nil_cargo_flight,
             },
             airlineEgmStep2:{
             
              mawb_no:data.airlineEgmStep2.mawb_no,
              mawb_date:data.airlineEgmStep2.mawb_date,
              port_origin:data.airlineEgmStep2.port_origin,
              port_destination:data.airlineEgmStep2.port_destination,
              shippment_type:data.airlineEgmStep2.shippment_type,
              total_packages:data.airlineEgmStep2.total_packages,
              gross_weight:data.airlineEgmStep2.gross_weight,
              item_description:data.airlineEgmStep2.item_description,
             
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

 downloadairlineegm() { 
    let formObj = this.airline_egm.getRawValue();
    let serializedForm = JSON.stringify(formObj);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(serializedForm));
    this.downloadJsonHref = uri;
   // console.log(serializedForm);
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

}

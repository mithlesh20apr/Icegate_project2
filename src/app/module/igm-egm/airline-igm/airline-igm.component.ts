import { Component, OnInit, EventEmitter,Output,ViewChild } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl,  AbstractControl, ValidationErrors } from '@angular/forms';
import { Subject, BehaviorSubject } from 'rxjs';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { TooltipPosition } from '@angular/material/tooltip';
import { MatStepper } from '@angular/material/stepper';
import {ValidatorsService} from '../../common/service/validators.service';
import { ThemePalette } from '@angular/material/core';
import * as _moment from 'moment';
import { Moment } from 'moment';

const moment = _moment;

@Component({
  selector: 'app-airline-igm',
  templateUrl: './airline-igm.component.html',
  styleUrls: ['./airline-igm.component.scss']
})
export class AirlineIgmComponent implements OnInit {
  airline_igm:FormGroup;
  tabs = [1];
  selected = new FormControl(0);
  selecteds = new FormControl(0);
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  disableAddButton = false;
  disableAddButtons= false;
  private formSumitAttempt: boolean;
  downloadJsonHref
  @ViewChild('stepper') private myStepper: MatStepper;
  @ViewChild('picker') picker: any;
  public date: moment.Moment;
  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public minDate: moment.Moment;
  public maxDate: moment.Moment;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';
  constructor(private router: Router,private _fb: FormBuilder,private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
 
    this.airline_igm=this._fb.group({
      airlineIgmStep1: this._fb.group({
        postId:[''],
       message_type:['F', Validators.required],
       custom_house_code:['',[Validators.maxLength(6)]],
       flight_no:['',[Validators.maxLength(15)]],
       flight_origin_date:new FormControl(moment()),
       expected_date_and_time_arrival:new FormControl(moment()),
       port_of_origin:['',[Validators.maxLength(3),Validators.required]],
       port_of_destination:['',[Validators.maxLength(3),Validators.required]],
       registration_number:['',Validators.maxLength(10)],
       nil_cargo_flight:['',Validators.required],
      }),
      airlineIgmStep2: this._fb.group({
      // airline_igm: new FormControl(""),
      mawb_details:this._fb.array([]),
    })
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
    {
      if (this.airline_igm.valid === true) {
        this.airline_igm.value
        Swal.fire({
          title: 'Step 1 completed',
          text: "Please click next for other step or click cancel",
          icon: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Next &nbsp; &#8594;'
        }).then((result) => {
          if (result.isConfirmed) {
            let element:HTMLElement = document.getElementById('save_continues') as HTMLElement;
            element.click();
          }
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Required Validation is left. Please check',
        }).then((result) =>{
          this.formSumitAttempt = true
        })
  
      }
    
    }
  }


  displayFieldCss(field: string) {
    // console.log(field);
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    return (
      (!this.airline_igm.get(field)?.valid && this.airline_igm.get(field)?.touched) ||
      (this.airline_igm.get(field)?.untouched && this.formSumitAttempt)
    );
  }

  // addMiscCharges(): FormArray {
  //   return this.airline_igm.get("airlineIgmStep1") as FormArray
  // }

  // AddAirlineIgmStep1(): FormGroup {
  //   return this._fb.group({
  //     message_type:['F', Validators.required],
  //     custom_house_code:['',[Validators.maxLength(6)]],
  //     flight_no:['',[Validators.maxLength(15)]],
  //     flight_origin_date:[''],
  //     expected_date_time_arrival:['',Validators.required],
  //     port_of_origin:['',[Validators.maxLength(3),Validators.required]],
  //     port_of_destination:['',[Validators.maxLength(3),Validators.required]],
  //     registration_number:['',Validators.maxLength(10)],
  //     nil_cargo_flight:['',Validators.required]

  //   });
  // }

  
  addMiscCharges(): FormArray {
    return this.airline_igm.get("airlineIgmStep1") as FormArray
  }

  // addMiscChargesTabs() {
  //   this.addMiscCharges().push(this.AddAirlineIgmStep1());
  // }

  AddMAWBDetails(): FormGroup{
    return this._fb.group({
     
        uld_no:new FormControl('',[Validators.maxLength(15),Validators.required]),
        mawb_no: new FormControl('',[Validators.maxLength(20),Validators.required]),
        mawb_date: new FormControl(''),
        port_of_origin:new FormControl('',[Validators.maxLength(3),Validators.required]),
        port_of_destination:new FormControl('',[Validators.maxLength(3),Validators.required]),
        shipment_type: new FormControl('',[Validators.maxLength(1),Validators.required]),
        total_packages:new FormControl('',[ValidatorsService.numberValidator,Validators.maxLength(8),Validators.required]),
        gross_weight: new FormControl('',[Validators.maxLength(13),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),9),Validators.required]),
        item_description: new FormControl('',[Validators.maxLength(30),Validators.required]),
        special_handling_code: new FormControl('',[Validators.maxLength(15)]),
        // hawb_details: this._fb.array([]),
    
    })

  }

  addMawbDetails(): FormArray {
        return this.airline_igm.controls['airlineIgmStep2'].get("mawb_details") as FormArray
  }

  // addHawbDetails(i:number) : FormArray {
  //       return this.addMawbDetails().at(i).get("hawb_details") as FormArray
  // }
    // Adding Tabs for MAWB Details
    addMAWBtabs() {
      this.addMawbDetails().push(this.AddMAWBDetails());
      this.selected.setValue(this.addMawbDetails().controls.length);
      if(this.addMawbDetails().controls.length == 3){
        this.disableAddButton = true;
      }
    }
    // Remove Tabs for MAWB Details
  removeMAWBtabs(index: number) {
    this.addMawbDetails().controls.splice(index, 1);
    if(this.addMawbDetails().controls.length < 3){
      this.disableAddButton = false;
    }
  }

    // HAWB Details Validation
    // AddHAWBDetails():FormGroup{
    //   return this._fb.group({
       
    //       hawb_no:new FormControl('',[Validators.maxLength(20),Validators.required]),
    //       hawb_date: new FormControl (''),
    //       port_of_origin: new FormControl('',[Validators.maxLength(3),Validators.required]),
    //       port_of_destination: new FormControl('',[Validators.maxLength(3),Validators.required]),
    //       shipment_type: new FormControl('',[Validators.maxLength(1),Validators.required]),
    //       total_packages: new FormControl('',[ValidatorsService.numberValidator,Validators.maxLength(8),Validators.required]),
    //       gross_weight: new FormControl('',[Validators.maxLength(13),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),9),Validators.required]),
    //       item_description:new FormControl('',[Validators.maxLength(30),Validators.required]),
    //       special_handling_code:new FormControl('',Validators.maxLength(15)),
       
    //   })
    // }
  // Adding Tabs for HAWB Details
  // addHAWBtabs(i:number) {
  //   this.addHawbDetails(i).push(this.AddHAWBDetails());
  //    if(this.addHawbDetails(i).controls.length === 10){
  //     this.disableAddButtons = true;
  //   }
  // }

  // removeHAWBtabs(i: number) {
  //   this.addHawbDetails(i).controls.splice(i, 1);
  //   if(this.addHawbDetails(i).controls.length < 10){
  //     this.disableAddButton = false;
  //   }
  // } 

     // validation code
     public onTouched: () => void = () => {

      //console.log('data');
    };
    writeValue(val: any): void {
      //console.log('written values')
      val && this.airline_igm.patchValue(val, { emitEvent: true });
    }
    registerOnChange(fn: any): void {
      //console.log("on change");
      this.airline_igm.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn: any): void {
      //console.log("on blur");
      this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
      isDisabled ? this.airline_igm.disable() : this.airline_igm.enable();
    }
    validate(c: AbstractControl): ValidationErrors | null {
      //console.log("Consignment Info validation", c);
      return this.airline_igm.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
    }
    // check validation when you click the continue buttons

    setStepFourData(data) {
      data.mawb_details.forEach(dataItem => {
        this.addMawbDetails().push(
          this._fb.group({
            uld_no:dataItem.uld_no,
            mawb_no:dataItem.mawb_no,
            mawb_date:dataItem.mawb_date,
            port_of_origin:dataItem.port_of_origin,
            port_of_destination:dataItem.port_of_destination,
            shipment_type:dataItem.shipment_type,
            total_packages:dataItem.total_packages,
            gross_weight:dataItem.gross_weight,
            item_description:dataItem.item_description,
            special_handling_code:dataItem.special_handling_code,
          }))
      })
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
                port_of_origin:data.airlineIgmStep1.port_of_origin,
                port_of_destination:data.airlineIgmStep1.port_of_destination,
                registration_number:data.airlineIgmStep1.registration_number,
                nil_cargo_flight:data.airlineIgmStep1.nil_cargo_flight,
               },
               airlineIgmStep2: [],
              //  airline_igm:{
              //   uld_no:data.airline_igm.uld_no,
              //   mawb_no:data.airline_igm.mawb_no,
              //   mawb_date:data.airline_igm.mawb_date,
              //   port_of_origin:data.airline_igm.port_of_origin,
              //   port_of_destination:data.airline_igm.port_of_destination,
              //   shipment_type:data.airline_igm.shipment_type,
              //   total_packages:data.airline_igm.total_packages,
              //   gross_weight:data.airline_igm.gross_weight,
              //   item_description:data.airline_igm.item_description,
              //   special_handling_code:data.airline_igm.special_handling_code,
              //  }

              
             
               
           }, );
         }
         this.setStepFourData(data.airlineIgmStep2);
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

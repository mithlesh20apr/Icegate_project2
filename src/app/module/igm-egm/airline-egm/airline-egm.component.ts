import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { Subject, BehaviorSubject } from 'rxjs';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { TooltipPosition } from '@angular/material/tooltip';
import { MatStepper } from '@angular/material/stepper';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import {ValidatorsService} from '../../common/service/validators.service';




@Component({
  selector: 'app-airline-egm',
  templateUrl: './airline-egm.component.html',
  styleUrls: ['./airline-egm.component.scss']
})
export class AirlineEgmComponent implements OnInit {
  airline_egm: FormGroup;
  tabs = [1];
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  selected = new FormControl(0);
  selecteds = new FormControl(0);
  disableAddButton = false;
  disableAddButtons= false;
  downloadJsonHref
  private formSumitAttempt: boolean;
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
    this.airline_egm=this._fb.group({
      airlineEgmStep1: this._fb.group({
        message_type:['F'],
        custom_house_code:['',Validators.maxLength(6)],
        flight_no:['',[Validators.maxLength(15),Validators.required]],
        flight_origin:['',Validators.required],
        egm_no:['',[ValidatorsService.numberValidator,Validators.maxLength(7)]],
        egm_date:[''],
        port_of_origin:['',[Validators.maxLength(3),Validators.required]],
        port_o_f_destination:['',[Validators.maxLength(3),Validators.required]],
        reg_no:['',[Validators.maxLength(10)]],
        nil_cargo_flight:['',Validators.required]
      }),
      airlineEgmStep2: this._fb.group({
        mawb_details:this._fb.array([])
        })
      
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
    {
      if (this.airline_egm.valid === true) {
        this.airline_egm.value
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
              flight_origin:data.airlineEgmStep1.flight_origin,
              egm_no:data.airlineEgmStep1.egm_no,
              egm_date:data.airlineEgmStep1.egm_date,
              port_of_origin:data.airlineEgmStep1.port_of_origin,
              port_o_f_destination:data.airlineEgmStep1.port_o_f_destination,
              reg_no:data.airlineEgmStep1.reg_no,
              nil_cargo_flight:data.airlineEgmStep1.nil_cargo_flight,
             },
             airlineEgmStep2:[],
            
           
             
         }, );
       }
       this.setStepFourData(data.airlineEgmStep2);
       });
   }
   }
   fileReader.onerror = (error) => {
     console.log(error);
   }

 }

  // check validation when you click the continue buttons
  isFieldValid(field: string) {
    return (
      (!this.airline_egm.get(field)?.valid && this.airline_egm.get(field)?.touched) ||
      (this.airline_egm.get(field)?.untouched && this.formSumitAttempt)
    );
  }
  setStepFourData(data) {
  //  console.log(data)
    data.mawb_details.forEach(dataItem => {
      this.addMawbDetails().push(
        this._fb.group({
          mawb_no:dataItem.mawb_no,
          mawb_date:dataItem.mawb_date,
          port_of_loading:dataItem.port_of_loading,
          port_of_destination:dataItem.port_of_destination,
          shipment_type:dataItem.shipment_type,
          no_of_packages:dataItem.no_of_packages,
          gross_weight:dataItem.gross_weight,
          item_desc:dataItem.item_desc,
        }))
    })
  }
  
 downloadairlineegm() { 
    let formObj = this.airline_egm.getRawValue();
    let serializedForm = JSON.stringify(formObj);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(serializedForm));
    this.downloadJsonHref = uri;
   // console.log(serializedForm);
  }
  AddMAWBDetails():FormGroup{
    return this._fb.group({
      mawb_no:new FormControl ('',Validators.maxLength(20)),
      mawb_date: new FormControl(''),
      port_of_loading:new FormControl('',[Validators.maxLength(3),Validators.required]),
      port_of_destination:new FormControl('',[Validators.maxLength(3),Validators.required]),
      shipment_type:new FormControl('',[Validators.maxLength(1),Validators.required]),
      no_of_packages:new FormControl('',[ValidatorsService.numberValidator,Validators.maxLength(5),Validators.required]),
      gross_weight:new FormControl('',[Validators.maxLength(17),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),13),Validators.required]),
      item_desc:new FormControl('',[Validators.maxLength(60),Validators.required]),
      // hawb_details: this._fb.array([]),
  
    })
  }

  // AddHAWBDetails():FormGroup{
  //   return this._fb.group({
  //     hawb_no: new FormControl ('',[Validators.maxLength(20),Validators.required]),
  //     hawb_date:new FormControl (''),
  //     port_of_loading:new FormControl ('',[Validators.maxLength(3),Validators.required]),
  //     port_of_destination:new FormControl ('',[Validators.maxLength(3),Validators.required]),
  //     shipment_type:new FormControl ('',[Validators.maxLength(1),Validators.required]),
  //     no_of_packages:new FormControl ('',[ValidatorsService.numberValidator,Validators.maxLength(8),Validators.required]),
  //     gross_weight:new FormControl ('',[Validators.maxLength(13),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),9),Validators.required]),
  //     item_desc:new FormControl ('',[Validators.maxLength(30),Validators.required]),

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

  addMawbDetails(): FormArray {
        return this.airline_egm.controls['airlineEgmStep2'].get("mawb_details") as FormArray
  }
  // addHawbDetails(i:number) : FormArray {
  //       return this.addMawbDetails().at(i).get("hawb_details") as FormArray
  // }
  //   // Adding Tabs for MAWB Details
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

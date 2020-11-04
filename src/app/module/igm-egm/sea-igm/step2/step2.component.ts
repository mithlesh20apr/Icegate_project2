import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,Validators , ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors, FormArray,} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {ValidatorsService} from '../../../common/service/validators.service';
import { TooltipPosition } from '@angular/material/tooltip';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Step2Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Step2Component),
      multi: true
    }
  ]
})
export class Step2Component implements OnInit {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  // tabs = [1];
  selected = new FormControl(0);
  selecteds = new FormControl(0);
  seaIgmStep2: FormGroup;
  disableAddButton = false;
  disableAddButtons= false;
  private formSumitAttempt: boolean;
  @Input() index: number;
  constructor(private _formBuilder: FormBuilder,public _dialog: MatDialog) { }

  ngOnInit(): void {
    this.seaIgmStep2=this._formBuilder.group({
      cargo_manifest_details:this._formBuilder.array([]),
    })
  }

  // openDialog(){
  //   let dialogRef = this._dialog.open(ContainerDetailsComponent, {disableClose: true});
  //   let dialogRef = this._dialog.open(Step3Component);
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(result);
  //   });
  // }


  // Cargo Manifest Validations
  AddCargoDetails(): FormGroup{
    return this._formBuilder.group({
      line_no: new FormControl('',[Validators.maxLength(4),ValidatorsService.numberValidator]),
      sub_line_no:new FormControl ('',[Validators.maxLength(4),ValidatorsService.numberValidator,Validators.required]),
      bl_no:new FormControl ('',[Validators.maxLength(20),Validators.required]),
      bl_date:new FormControl ('',Validators.required),
      port_of_loading:new FormControl ('',[Validators.maxLength(6),Validators.required]),
      port_of_destination:new FormControl ('',[Validators.maxLength(6),Validators.required]),
      importer_name:new FormControl ('',[Validators.maxLength(35),Validators.required]),
      importer_address1:new FormControl ('',[Validators.maxLength(35),Validators.required]),
      importer_address2:new FormControl('',[Validators.maxLength(35),Validators.required]),
      importer_address3:new FormControl ('',Validators.maxLength(35)),
      name_of_other_notified_party: new FormControl('',Validators.maxLength(35)),
      address_1:new FormControl('',Validators.maxLength(35)),
      address_2:new FormControl('',Validators.maxLength(35)),
      address_3:new FormControl('',Validators.maxLength(35)),
      nature_of_cargo:new FormControl ('',[Validators.maxLength(2),Validators.required]),
      item_type: new FormControl ('',Validators.maxLength(2)),
      cargo_movement: new FormControl('',[Validators.maxLength(2),Validators.required]),
      port_of_discharge:new FormControl ('',Validators.maxLength(10)),
      number_of_packages:new FormControl ('',[Validators.maxLength(8),ValidatorsService.numberValidator,Validators.required]),
      type_of_packages:new FormControl ('',[Validators.maxLength(3),Validators.required]),
      gross_weight:new FormControl ('',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),12),Validators.required]),
      unit_of_weight:new FormControl ('',[Validators.maxLength(3),Validators.required]),
      gross_vol:new FormControl ('',[Validators.maxLength(16),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,3}$/),12)]),
      unit_of_vol:new FormControl ('',[Validators.maxLength(3)]),
      marks_of_numbers:new FormControl ('',[Validators.maxLength(300),Validators.required]),
      goods_description:new FormControl ('',[Validators.maxLength(250),Validators.required]),
      uno_code:new FormControl('',[Validators.maxLength(5),Validators.required]),
      imo_code:new FormControl('',[Validators.maxLength(3),Validators.required]),
      transit_bond_no:new FormControl('',Validators.maxLength(10)),
      carrier_code:new FormControl('',Validators.maxLength(10)),
      mode_of_transport:new FormControl('',Validators.maxLength(1)),
      mlo_code:new FormControl('',Validators.maxLength(16)),  
      container_details:this._formBuilder.array([])
    })
  }

  // Container Details Validations
  AddContainerDetails():FormGroup{
    return this._formBuilder.group({
      line_no: new FormControl('',[Validators.maxLength(4),ValidatorsService.numberValidator]),
      sub_line_no:new FormControl ('',[Validators.maxLength(4),ValidatorsService.numberValidator]),
      container_no:new FormControl ('',[Validators.maxLength(11),Validators.required]),
      container_seal_no:new FormControl ('',Validators.maxLength(15)),
      container_agent_code:new FormControl ('',Validators.maxLength(16)),
      container_status:new FormControl ('',[Validators.maxLength(3),Validators.required]),
      total_no_of_packages_in_container:new FormControl ('',[Validators.maxLength(8),ValidatorsService.numberValidator]),
      container_weight:new FormControl ('',[Validators.maxLength(17),ValidatorsService.Decimalcheck((/^\d*\.?\d{0,2}$/),14)]),
      iso_code:new FormControl ('',[Validators.maxLength(4),Validators.required]),
      soc_flag:new FormControl ('',[Validators.maxLength(1),Validators.required]),
    })
  }
 
    // below functions are the add and remove functions for the Array
    addCargoManifestDetails(): FormArray {
          return this.seaIgmStep2.get("cargo_manifest_details") as FormArray
    }
    addContainerDetails(i:number) : FormArray {
          return this.addCargoManifestDetails().at(i).get("container_details") as FormArray
    }
    // Adding Tabs for Cargo Manifest Details
    addCargoManifesttabs() {
      // console.log(this.addCargoManifestDetails())
      this.addCargoManifestDetails().push(this.AddCargoDetails());
      this.selected.setValue(this.addCargoManifestDetails().controls.length);
      if(this.addCargoManifestDetails().controls.length == 10){
        this.disableAddButton = true;
      }
    }
  // Remove Tabs for Cargo Manifest Details
    removeCargoManifesttabs(index: number) {
      this.addCargoManifestDetails().controls.splice(index, 1);
      if(this.addCargoManifestDetails().controls.length < 10){
        this.disableAddButton = false;
      }
    }
  
  // Adding Tabs for Container Details
    addContainertabs(i:number) {
      this.addContainerDetails(i).push(this.AddContainerDetails());
       if(this.addContainerDetails(i).controls.length === 10){
        this.disableAddButtons = true;
      }
    }
  // Removing Tabs for Container Details
    removeContainertabs(i: number) {
      this.addContainerDetails(i).controls.splice(i, 1);
      if(this.addContainerDetails(i).controls.length < 10){
        this.disableAddButton = false;
      }
    }
    // validation code
    public onTouched: () => void = () => {

      //console.log('data');
    };
    writeValue(val: any): void {
      //console.log('written values')
      val && this.seaIgmStep2.patchValue(val, { emitEvent: true });
    }
    registerOnChange(fn: any): void {
      //console.log("on change");
      this.seaIgmStep2.valueChanges.subscribe(fn);
    }
    registerOnTouched(fn: any): void {
      //console.log("on blur");
      this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
      isDisabled ? this.seaIgmStep2.disable() : this.seaIgmStep2.enable();
    }
    validate(c: AbstractControl): ValidationErrors | null {
      //console.log("Consignment Info validation", c);
      return this.seaIgmStep2.valid ? null : { invalidForm: { valid: false, message: "Step1 fields are invalid" } };
    }
    // check validation when you click the continue buttons
    isFieldValid(field: string) {
      return (
        (!this.seaIgmStep2.get(field).valid && this.seaIgmStep2.get(field).touched) ||
        (this.seaIgmStep2.get(field).untouched && this.formSumitAttempt)
      );
    }
  
    displayFieldCss(field: string) {
      return {
        'has-error': this.isFieldValid(field),
        'has-feedback': this.isFieldValid(field)
      };
    }
    onSubmit() {
      if (this.seaIgmStep2.valid === true) {
        this.seaIgmStep2.value
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

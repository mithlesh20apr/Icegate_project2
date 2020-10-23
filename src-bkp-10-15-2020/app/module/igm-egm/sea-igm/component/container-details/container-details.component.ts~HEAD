import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-container-details',
  templateUrl: './container-details.component.html',
  styleUrls: ['./container-details.component.scss']
})
export class ContainerDetailsComponent implements OnInit {

  tabs4 = [0];
  selected = new FormControl(0);
  disableAdd1Button = false;
  constructor() { }

  ngOnInit(): void {

  }

  addTab1() {
    this.tabs4.push(this.tabs4.length);
    this.selected.setValue(this.tabs4.length);
    if(this.tabs4.length == 10){
      this.disableAdd1Button = true;
    }
  }

  removeTab1(index: number) {
    this.tabs4.splice(index, 1);
    if(this.tabs4.length < 10){
      this.disableAdd1Button = false;
    }
  }



}

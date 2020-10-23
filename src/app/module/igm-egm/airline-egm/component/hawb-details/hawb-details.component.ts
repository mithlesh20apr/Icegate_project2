import { Component, OnInit } from '@angular/core';
import {FormControl } from '@angular/forms';

@Component({
  selector: 'app-hawb-details',
  templateUrl: './hawb-details.component.html',
  styleUrls: ['./hawb-details.component.scss']
})
export class HawbDetailsComponent implements OnInit {
 
  tabs1 = [0];
  selected = new FormControl(0);
  disableAdd1Button = false;
  
  constructor() { }

  ngOnInit(): void {
   
  }
  addTab1() {
    this.tabs1.push(this.tabs1.length);
    this.selected.setValue(this.tabs1.length);
    if(this.tabs1.length == 10){
      this.disableAdd1Button = true;
    }
  }

  removeTab1(index: number) {
    this.tabs1.splice(index, 1);
    if(this.tabs1.length < 10){
      this.disableAdd1Button = false;
    }
  }

}

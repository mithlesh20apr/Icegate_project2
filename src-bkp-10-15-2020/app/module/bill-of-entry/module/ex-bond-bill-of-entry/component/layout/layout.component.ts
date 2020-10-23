import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  dynamicArray = [1];
  flag = true;
  dynamicArray2 = [1];
  flag2 = true;
 
  progress = 20;
  progress2 = 20;

  TabIndex = 0;
  TabIndex2 = 0;
 

  constructor() { }

  ngOnInit(): void {

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

  selectionChange($event) {
    if ($event.selectedIndex == 2 || $event.selectedIndex == 3 || $event.selectedIndex == 4) {
    }
  }
}

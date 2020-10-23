import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-select-bill-of-entry',
  templateUrl: './select-bill-of-entry.component.html',
  styleUrls: ['./select-bill-of-entry.component.css']
})
export class SelectBillOfEntryComponent implements OnInit {

  isSelected = false;
  isSelected1 = false;
  isSelected2 = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getSelectedAll(value) {
    // console.log('Value',value)
    if (value == 'a') {
      this.isSelected = !this.isSelected;
      console.log('Flag', this.isSelected)
      this.isSelected1 = false
      this.isSelected2 = false
    }
    else if (value == 'b') {
      this.isSelected1 = !this.isSelected1;
      this.isSelected2 = false
      this.isSelected = false
    }
    else {
      this.isSelected2 = !this.isSelected2;
      this.isSelected = false
      this.isSelected1 = false
    }
  }


  goToForm() {
    if (this.isSelected == true) {
      // console.log('Flag in router',this.isSelected)
      this.router.navigate(['/bill-of-entry/home-consumption'])
    }
    else if (this.isSelected1 == true) {
      this.router.navigate(['/bill-of-entry/in-bond'])
    }
    else if (this.isSelected2 == true) {
      this.router.navigate(['/bill-of-entry/ex-bond'])
    }
    else {
      this.router.navigate([''])
    }
  }

}

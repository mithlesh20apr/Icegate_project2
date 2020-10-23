import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Step4Component } from '../step4/step4.component';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  constructor(public _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    let dialogRef = this._dialog.open(Step4Component);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}

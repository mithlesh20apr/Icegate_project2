import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { RoleDashboardService } from '../../service/role-dashboard.service';
import { Widget } from '../../model/widgets';
import { FormGroup, FormControl } from '@angular/forms';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-customize-roles',
  templateUrl: './customize-roles.component.html',
  styleUrls: ['./customize-roles.component.scss']
})
export class CustomizeRolesComponent implements OnInit {
  asyncTabs: Observable<Widget[]>;
  icegateId: string;
  customizeRoleForm: FormGroup;

  constructor(private roleDashboardService: RoleDashboardService) {
    this.icegateId = sessionStorage.getItem('icegateId');
    this.getWidgets();

  }

  ngOnInit(): void {
    this.initilizeForm();
  }

  initilizeForm() {
    this.customizeRoleForm = new FormGroup({
      profileStatus: new FormControl(false),
      registrationStatus: new FormControl(false),
      ticketManagement: new FormControl(false),
      drafts: new FormControl(false),
      egmStatus: new FormControl(false),
      igmStatus: new FormControl(false),
      billOfEntryStatus: new FormControl(false),
      shippingBillStatus: new FormControl(false),
      licenseDetails: new FormControl(false),
      teamManagement: new FormControl(false),
      challansGenerated: new FormControl(false),
      notifications: new FormControl(false),
      myIec: new FormControl(false),
      igstRefund: new FormControl(false),
      exportIncentive: new FormControl(false),
      ledger: new FormControl(false),
      bondAndBg: new FormControl(false),
      foreignRemittances: new FormControl(false),
    })
  }

  getWidgets() {
    this.roleDashboardService.getWidgets(this.icegateId).subscribe((data: Widget[]) => {
      console.log(data);
      this.createTabs(data);

    }, err => {
      console.log(err)
    })
  }

  createTabs(data) {
    this.asyncTabs = new Observable((observer: Observer<Widget[]>) => {
      setTimeout(() => {
        observer.next(data);
      }, 1000);
    });
  }

  savePreferences(roleName) {
    console.log(roleName)
    event.preventDefault();
    console.log(this.customizeRoleForm.value)
  }

  test(event){
    console.log(event)
  }

}
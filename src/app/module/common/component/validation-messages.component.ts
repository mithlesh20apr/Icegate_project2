import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidatorsService } from '../service/validators.service';
@Component({
    selector: 'validation-messages',
    template: `<div class="text-danger" *ngIf="errorMessage">
    <fa-icon [icon]="['fas', 'exclamation-circle']"></fa-icon>  <b> Error:</b> {{errorMessage}} {{errorMsg}}</div>
    `
})
export class ValidationMessagesComponent {

    @Input() control: FormControl;
    @Input() errorMsg: string;
    constructor() {
    }
    get errorMessage() {
        for (let propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && (this.control.dirty || this.control.touched)) {
                return ValidatorsService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
            }
        }
        return null;
    }
}
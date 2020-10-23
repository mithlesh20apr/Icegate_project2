import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidatorsService } from '../service/validators.service';


@Component({
    selector: 'validation-messages',
    template: `<div class="text-danger" *ngIf="errorMessage">
    <img src="assets/images/check.png" class="form-control-feedback fix-error-icon"/>
    <span class="sr-only">(error)</span> <div class="error-msg">{{errorMessage}}</div></div>`
})
export class ValidationMessagesComponent {
    @Input() control: FormControl;
 
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
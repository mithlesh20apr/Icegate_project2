import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { kMaxLength } from 'buffer';

@Component({
  selector: 'app-third-party-details',
  templateUrl: './third-party-details.component.html',
  styleUrls: ['./third-party-details.component.scss']
})
export class ThirdPartyDetailsComponent implements OnInit {

  thirdPartyDetails: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.thirdPartyDetails = this._formBuilder.group({
      third_party_name: ['', [Validators.maxLength(70)]],
      third_party_address1: ['', [Validators.maxLength(70)]],
      third_party_address2: ['', [Validators.maxLength(50)]],
      third_party_city: ['', [Validators.maxLength(35)]],
      third_party_country_subdivision: ['', [Validators.maxLength(35)]],
      third_party_country_code: [''],
      third_party_pin: ['', [Validators.maxLength(10)]],
      authorized_economic_operator_code: ['', [Validators.maxLength(17)]],
      authorized_economic_operator_country: [''],
      authorized_economic_operator_role: ['', [Validators.maxLength(3)]],
      terms_place: ['', [Validators.maxLength(35)]]
    });
  }

}

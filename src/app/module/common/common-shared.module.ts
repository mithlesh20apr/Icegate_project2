import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationMessagesComponent } from './component/validation-messages.component';

import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare,faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faSquare as farSquare, faCheckSquare as farCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';


@NgModule({
  declarations: [ValidationMessagesComponent],
  imports: [
    CommonModule,FontAwesomeModule,
  ],
  exports: [
    ValidationMessagesComponent
]
})
export class CommonSharedModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faSquare,faExclamationCircle, faCheckSquare, farSquare, farCheckSquare, faStackOverflow, faGithub, faMedium);
  }
 }

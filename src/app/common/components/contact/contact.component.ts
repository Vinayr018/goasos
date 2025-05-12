import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ContactHelperService } from '../../services/contact-helper.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  @Input({ required: true }) public h2!: string;
  @Input() public h3: string;

  constructor(public helper: ContactHelperService) {
    this.h3 = '';
  }

  public FormSubmit(): void {
    console.log('formSubmit', this.helper.IsFormValid, this.helper.contactValue, this.helper.PhoneControl.errors);
  }



}

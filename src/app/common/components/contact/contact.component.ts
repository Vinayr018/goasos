import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ContactHelperService } from '../../services/contact-helper.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  @Input({ required: true }) public h2!: string;


  // const height = div.getBoundingClientRect().height;

  constructor(public helper: ContactHelperService) { }

  public FormSubmit(): void {
    console.log('formSubmit', this.helper.IsFormValid, this.helper.contactValue, this.helper.PhoneControl.errors);
  }



}

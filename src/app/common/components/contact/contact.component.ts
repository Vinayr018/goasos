import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomSelectOption } from '../../models';
import { ContactHelperService } from '../../services/contact-helper.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  @Input({ required: true }) public h2!: string;

  constructor(public helper: ContactHelperService) { }

  public FormSubmit(): void {
    console.log('formSubmit', this.helper.IsFormValid, this.helper.contactValue);
  }



}

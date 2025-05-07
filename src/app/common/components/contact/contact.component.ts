import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomSelectOption } from '../../models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  public contactGroup: FormGroup;

  @Input({ required: true }) public h2!: string;
  @Input({ required: true }) public services!: string[];

  public Locations: CustomSelectOption[] = [
    { key: 'Bengaluru', value: 'Bengaluru' },
    { key: 'Bhubaneshwar', value: 'Bhubaneshwar' },
    { key: 'Cuttack', value: 'Cuttack' },
  ];

  public get MapServices(): CustomSelectOption[] {
    return this.services.map(s => new CustomSelectOption(s, s));
  }

  constructor() {
    this.contactGroup = new FormGroup({
      name: new FormControl<string>('', [Validators.required]),
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      phone: new FormControl<number>(0, [Validators.required]),
      interest: new FormControl<CustomSelectOption[]>([], [Validators.required]),
      location: new FormControl<CustomSelectOption[]>([], [Validators.required])
    });

  }

  public FormSubmit(): void {
    console.log('formSubmit', this.contactGroup.valid, this.contactGroup.getRawValue());
  }



}

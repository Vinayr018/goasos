import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomSelectOption } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ContactHelperService {

  private _locations: string[] = [
    'Bengaluru',
    'Bhubaneshwar',
    'Cuttack',
  ];

  private _services: string[] = [
    'Home Automation',
    'Office Automation',
    'Industry Automation',
    'Security Automation',
    'Space Automation'
  ];

  private _errormessage: any = {
    name: {
      required: 'Name is required'
    },
    email: {
      required: 'Email is required for communication purposes',
      email: 'Not a valid email'
    },
    phone: {
      required: 'Phone number is required for communication purposes',
      unknown: 'Our services are available only in India and the US.',
      pattern: 'Invalid phone number'
    },
    interest: {
      required: 'Please select atleast 1 field you are interested in'
    },
    location: {
      required: 'Please select location'
    },
    message: {
      required: 'Please briefly specify your requirement!'
    },
  }

  public contactGroup: FormGroup;

  public get IsFormValid(): boolean {
    return this.contactGroup.valid;
  }

  public get contactValue(): any {
    return this.contactGroup.getRawValue();
  }

  constructor() {
    this.contactGroup = new FormGroup({
      name: new FormControl<string>('', [Validators.required]),
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      phone: new FormControl<string>('', [Validators.required, Validators.pattern(this.regEx['IN'])]),
      interest: new FormControl<CustomSelectOption[]>([], [Validators.required]),
      location: new FormControl<CustomSelectOption[]>([], [Validators.required]),
      message: new FormControl<string>('', [Validators.required])
    });
  }

  public Locations: CustomSelectOption[] = this._locations.map(l => new CustomSelectOption(l, l));
  public Services: CustomSelectOption[] = this._services.map(l => new CustomSelectOption(l, l));

  public get NameControl(): AbstractControl<string> {
    return this.contactGroup.controls['name'];
  }

  public get EmailControl(): AbstractControl<string> {
    return this.contactGroup.controls['email'];
  }

  public get PhoneControl(): AbstractControl<string> {
    return this.contactGroup.controls['phone'];
  }

  public get InterestControl(): AbstractControl<CustomSelectOption[]> {
    return this.contactGroup.controls['interest'];
  }

  public get LocationControl(): AbstractControl<CustomSelectOption[]> {
    return this.contactGroup.controls['location'];
  }

  public get MessageControl(): AbstractControl<string> {
    return this.contactGroup.controls['message'];
  }

  public HasError(control: AbstractControl<any> | undefined): boolean {
    if (!control) {
      return false;
    }

    return (control.touched && !!control.errors)
      || (control.dirty && !!control.errors)
  }

  public ErrorMessage(control: AbstractControl<any>): string | undefined {
    const field = this.getControlName(control);

    if (!field) {
      return undefined;
    }

    const errorKey = !!control.errors ? Object.keys(control.errors)[0] : undefined;

    if (!errorKey) {
      return undefined;
    }

    return this._errormessage[field][errorKey]
  }

  private getControlName(control: AbstractControl): string | null {
    if (!control.parent) return null;

    let name: string | null = null;

    Object.keys(control.parent.controls).forEach(key => {
      const childControl = control.parent?.get(key);
      if (childControl === control) {
        name = key;
      }
    });

    return name;
  }

  private regEx: Record<string, string> = {
    IN: '^[6-9]\\d{9}$',
    US: '^(?:\\([2-9]\\d{2}\\)\\s?|[2-9]\\d{2}[-.\\s]?)[2-9]\\d{2}[-.\\s]?\\d{4}$'
  };

  public UpdatePhoneFormatValidation(newVal: CustomSelectOption): void {
    this.PhoneControl.clearValidators();
    const matchingRegex = this.regEx[newVal.key]
    console.log(matchingRegex);
    if (!matchingRegex) {
      this.PhoneControl.setErrors({ unknown: true });
      this.PhoneControl.updateValueAndValidity();
      return;
    }

    this.PhoneControl.setValidators(Validators.pattern(matchingRegex));
    this.PhoneControl.updateValueAndValidity();
  }

}

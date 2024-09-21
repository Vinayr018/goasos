import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { IdentifierService } from '../../../common/services';

@Component({
  selector: 'app-main-contact-form',
  templateUrl: './main-contact-form.component.html',
  styleUrl: './main-contact-form.component.scss'
})
export class MainContactFormComponent {
  public formGroup: FormGroup;
  private categories: number[];
  private isSubmitted = false;

  constructor(private iden: IdentifierService) {
    this.categories = [];
    this.formGroup = new FormGroup({
      phone: new FormControl<string>('', [Validators.required, Validators.pattern('^\\d{10}$')]),
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      category: new FormControl<number[]>([], [Validators.required]),
      query: new FormControl<string>('', [Validators.required]),
    });
  }

  public get ValidQuery(): string {
    const crontol: AbstractControl<string> | null = this.formGroup.get('query');
    
    if (!crontol) {
      return '';
    }

    if (!crontol.errors) {
      return '';
    }

    if (!this.isSubmitted && !this.formGroup.touched
      && !this.formGroup.dirty) {
      return '';
    }

    const errors: string[] = Object.keys(crontol.errors);

    return errors[0];
  }

  public get ValidCategory(): string {
    const crontol: AbstractControl<number[]> | null = this.formGroup.get('category');
    
    if (!crontol) {
      return '';
    }

    if (!crontol.errors) {
      return '';
    }

    if (!this.isSubmitted && !this.formGroup.touched
      && !this.formGroup.dirty) {
      return '';
    }

    const errors: string[] = Object.keys(crontol.errors);

    return errors[0];
  }

  public get ValidPhone(): string {
    const crontol: AbstractControl<string> | null = this.formGroup.get('phone');
    
    if (!crontol) {
      return '';
    }

    if (!crontol.errors) {
      return '';
    }

    if (!this.isSubmitted && !this.formGroup.touched
      && !this.formGroup.dirty) {
      return '';
    }

    const errors: string[] = Object.keys(crontol.errors);

    return errors[0];
  }

  public get ValidEmail(): string {
    const crontol: AbstractControl<string> | null = this.formGroup.get('email');
    
    if (!crontol) {
      return '';
    }

    if (!crontol.errors) {
      return '';
    }

    if (!this.isSubmitted && !this.formGroup.touched
      && !this.formGroup.dirty) {
      return '';
    }

    const errors: string[] = Object.keys(crontol.errors);

    return errors[0];
  }

  public CategoryChangeEvent(event: MatCheckboxChange): void {
    const value = Number(event.source.value);
    const catCrontol: AbstractControl<number[]> | null = this.formGroup.get('category');

    if (!catCrontol) {
      return;
    }

    if (event.checked) {
      this.categories.push(value);
    } else {
      const foundIndex = this.categories.findIndex(v => v === value);
      if (foundIndex !== -1) {
        this.categories = this.categories.filter(v => v !== value);
      }
    }
    catCrontol.patchValue(this.categories);
    catCrontol.setErrors(this.categories.length > 0 ? null : { required: true });
  }

  public SubmitQuery(): void {
    this.isSubmitted = true;
    console.log('submit', this.formGroup.getRawValue(),this.iden.identifier);
  }
}

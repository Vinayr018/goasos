import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-main-contact-form',
  templateUrl: './main-contact-form.component.html',
  styleUrl: './main-contact-form.component.scss'
})
export class MainContactFormComponent {
  public formGroup: FormGroup;
  private categories: number[];

  constructor() {
    this.categories = [];
    this.formGroup = new FormGroup({
      phone: new FormControl<string>('', [Validators.required]),
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      category: new FormControl<number[]>([], [Validators.required]),
      query: new FormControl<string>('', [Validators.required]),
    });
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
    console.log('submit', this.formGroup.getRawValue());
  }
}

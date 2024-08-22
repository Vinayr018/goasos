import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main-contact-branch',
  templateUrl: './main-contact-branch.component.html',
  styleUrl: './main-contact-branch.component.scss'
})
export class MainContactBranchComponent {
  @Input({ required: true }) public heading!: string;
  @Input({ required: true }) public numbers!: string[];
  @Input({ required: true }) public location!: string;

  constructor(public domSanitizer: DomSanitizer) { }

  public sanitizePhoneNumber(number: string): string {
    return number.replace(/\s+/g, '').replace(/-/g, '');
  }
}

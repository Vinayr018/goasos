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
  @Input() public isEmail: boolean = false;

  constructor(public domSanitizer: DomSanitizer) { }

  public sanitizePhoneNumber(number: string): string {
    let app = this.isEmail ? 'mailto:' : 'tel:';
    let cleanUrl = number.replace(/\s+/g, '');
    cleanUrl = this.isEmail ? cleanUrl : cleanUrl.replace(/-/g, '')
    return `${app}${cleanUrl}`;
  }
}

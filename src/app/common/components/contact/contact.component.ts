import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ContactHelperService } from '../../services/contact-helper.service';
import { ContactService } from '../../services/contact.service';
import { ContactModel } from '../../models';
import { AnalyticsService } from '../../services/analytics.service';
import { ContactLocationService } from '../../services/contact-location.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  @Input({ required: true }) public h2!: string;
  @Input() public h3: string;

  constructor(public helper: ContactHelperService,
    private ser: ContactService,
    public analytics: AnalyticsService,
    public cont: ContactLocationService) {
    this.h3 = '';
  }

  public FormSubmit(): void {
    if (this.helper.IsFormValid) {
      this.ser.SendEmailNew(new ContactModel(this.helper.contactValue, this.helper.countryCode!));
    }
  }

  public CaptureClicks(cta: string): void {
    this.analytics.HomeCtaEvent(cta);
  }


}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { GoasosTitleService } from '../../../common/services/title.service';
import { MetaService } from '../../../common/services/meta.service';
import { AnalyticsService } from '../../../common/services/analytics.service';
import { ContactLocationService } from '../../../common/services/contact-location.service';
import { SchemaService } from '../../../common/services/schema.service';
import { SoftwareSchema } from '../../../common/models/schema';

@Component({
  selector: 'app-consult-bank',
  templateUrl: './consult-bank.component.html',
  styleUrl: './consult-bank.component.scss',
  providers: [SchemaService]
})
export class ConsultBankComponent implements OnInit, OnDestroy {
  constructor(title: GoasosTitleService,
    meta: MetaService,
    private schemaService: SchemaService,
    public analytics: AnalyticsService,
    public cont: ContactLocationService) {
    title.UpdateTitle = 'Software Consulting Services | Banking, Capital Markets & AI Services - Bangalore, Bhubaneswar & Cuttack';
    meta.Description = 'Elevate your business with our expert software consulting services in Bangalore, Bhubaneswar, and Cuttack. Specialized in Banking & Financial Services, Capital Markets Solutions, and Data & AI Services.';
    meta.Keywords = 'energy automation, energy automation in bangalore, energy automation in indiranagar, energy automation in bengaluru, energy automation in bhubaneshwar, energy automation in cuttack, energy automation in usa';
  }
  ngOnInit(): void {
    this.schemaService.UpdateSchema(new SoftwareSchema());
  }
  ngOnDestroy(): void {
    this.schemaService.RemoveSchema();
  }

  public CaptureClicks(cta: string): void {
    this.analytics.HomeCtaEvent(cta);
  }
}

import { Component } from '@angular/core';
import { GoasosTitleService } from '../../../common/services/title.service';
import { MetaService } from '../../../common/services/meta.service';
import { ContactLocationService } from '../../../common/services/contact-location.service';
import { AnalyticsService } from '../../../common/services/analytics.service';
import { Interest } from '../../../common/models';

@Component({
  selector: 'app-automation-energy',
  templateUrl: './automation-energy.component.html',
  styleUrl: './automation-energy.component.scss'
})
export class AutomationEnergyComponent {

  public others: Interest[] = [
    { h3: 'Home Automation Solutions:', p: 'Transform your living space with intelligent systems that enhance comfort, security, and energy efficiency.', cta: 'Make Your Home Smarter', link: 'smart-home-automation-solutions' },
    { h3: 'Office Automation Services:', p: 'Streamline workplace operations with smart systems that boost productivity and strengthen security.', cta: 'Optimize Your Office', link: 'smart-office-automation-solutions' },
    { h3: 'Industrial Automation Systems:', p: 'Optimize your industrial operations with robust, cloud-based solutions.', cta: 'Boost Production', link: 'industrial-automation-solutions' },
  ];

  constructor(title: GoasosTitleService,
    meta: MetaService,
    public analytics: AnalyticsService,
    public cont: ContactLocationService) {
    title.UpdateTitle = 'Solar Panel Installation in Bangalore, Bhubaneswar & Cuttack | Rooftop Solar Solutions';
    meta.Description = 'Harness the power of solar and smart energy automation with GOAS. We offer end-to-end solar panel installation and smart energy management systems for homes, offices, and industrial sites in Bangalore, Bhubaneswar and Cuttack. Save energy, reduce costs, and go green today!';
    meta.Keywords = 'energy automation, energy automation in bangalore, energy automation in indiranagar, energy automation in bengaluru, energy automation in bhubaneshwar, energy automation in cuttack, energy automation in usa';
  }

  public CaptureClicks(cta: string): void {
    this.analytics.HomeCtaEvent(cta);
  }
}

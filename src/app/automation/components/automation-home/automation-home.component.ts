import { Component } from '@angular/core';
import { GoasosTitleService } from '../../../common/services/title.service';
import { MetaService } from '../../../common/services/meta.service';
import { ContactLocationService } from '../../../common/services/contact-location.service';
import { AnalyticsService } from '../../../common/services/analytics.service';
import { Interest } from '../../../common/models';

@Component({
  selector: 'app-automation-home',
  templateUrl: './automation-home.component.html',
  styleUrl: './automation-home.component.scss'
})
export class AutomationHomeComponent {

  public others: Interest[] = [
    { h3: 'Security Cameras & Centralized Surveillance:', p: 'Protect your assets and ensure security with advanced video surveillance systems designed for residential, commercial and industrial environments', cta: 'Upgrade Your Security', link: 'cctv-video-surveillance-security-cameras' },
    { h3: 'Space-Saving Multi-Functional Furniture', p: 'Maximize functionality in limited spaces with our innovative space-saving furniture and smart storage solutions for homes and offices.', cta: 'Optimize Your Space Today', link: 'space-saving-furniture-solutions' },
    { h3: 'Solar Energy Solutions:', p: 'Optimize energy consumption with renewable solutions for homes and businesses.', cta: 'Go Green', link: 'solar-energy-solutions' }
  ];

  constructor(title: GoasosTitleService,
    meta: MetaService,
    public cont: ContactLocationService,
    public analytics: AnalyticsService) {
    title.UpdateTitle = 'Smart Home Automation Solutions | Best Home Automation Company in Bangalore, Bhubaneswar & Cuttack | GOAS';
    meta.Description = 'Looking for smart home automation solutions? We offer smart lighting, security systems, voice-controlled devices, and AI-powered smart home setups in Bangalore, Bhubaneswar & Cuttack. Upgrade your home today!';
  }

  public CaptureClicks(cta: string): void {
    this.analytics.HomeCtaEvent(cta);
  }
}

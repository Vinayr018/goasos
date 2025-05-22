import { Component } from '@angular/core';
import { AutomationDataService } from '../../services/data.service';
import { Box, Interest } from '../../../common/models';
import { GoasosTitleService } from '../../../common/services/title.service';
import { MetaService } from '../../../common/services/meta.service';
import { SecurityTypes } from '../../models';
import { AnalyticsService } from '../../../common/services/analytics.service';
import { ContactLocationService } from '../../../common/services/contact-location.service';

@Component({
  selector: 'app-automation-security',
  templateUrl: './automation-security.component.html',
  styleUrl: './automation-security.component.scss'
})
export class AutomationSecurityComponent {

  public others: Interest[] = [
    { h3: 'Home Automation Solutions:', p: 'Transform your living space with intelligent systems that enhance comfort, security, and energy efficiency.', cta: 'Make Your Home Smarter', link: 'smart-home-automation-solutions' },
    { h3: 'Office Automation Services:', p: 'Streamline workplace operations with smart systems that boost productivity and strengthen security.', cta: 'Optimize Your Office', link: 'smart-office-automation-solutions' },
    { h3: 'Industrial Automation Systems:', p: 'Optimize your industrial operations with robust, cloud-based solutions.', cta: 'Boost Production', link: 'industrial-automation-solutions' },
  ];

  public types: SecurityTypes[] = [
    { title: 'IP Security Cameras', imgSrc: 'cc', imgalt: 'CCTV', points: ['High-definition video (HD, 4K)', 'Night vision and motion sensors', 'Weather-resistant construction for outdoor use', 'Network integration for centralized monitoring'] },
    { title: 'Solar-Powered CCTV Cameras', imgSrc: 'solar-cc', imgalt: 'Solar CCTV', points: ['Independent, energy-efficient surveillance', 'Ideal for outdoor & remote installations', 'Works even during power outages', 'Lower operating costs than traditional systems'] },
    { title: 'Smart Surveillance Technology', imgSrc: 'smart-cc', imgalt: 'Smart CCTV', points: ['AI-powered motion detection', 'Object recognition capabilities', 'Automated tracking of suspicious activities', 'Intelligent alert filtering'] },
    { title: 'App-Controlled Surveillance', imgSrc: 'app-cc', imgalt: 'app CCTV', points: ['Real-time mobile alerts on movement detection', 'View multiple camera feeds from anywhere', 'Centralized control via easy-to-use dashboard'] },
    { title: 'Centralized Video Management', imgSrc: 'mon-cc', imgalt: 'monitor CCTV', points: ['Monitor multiple sites from one control panel', 'Record, replay, and analyze video feeds', 'Scalable from small homes to large industrial setups'] },
  ];
  constructor(title: GoasosTitleService,
    meta: MetaService,
    public analytics: AnalyticsService,
    public cont: ContactLocationService) {
    title.UpdateTitle = 'Centralized Video Surveillance Systems | CCTV Installation Services in Bangalore, Bhubaneswar & Cuttack';
    meta.Description = 'Secure your spaces with solar-powered CCTV camera systems and centralized video surveillance. Expert installation across Bangalore, Bhubaneswar and Cuttack. Trusted security for homes, offices & industries. Contact us today!';
    meta.Keywords = 'security automation, security automation in bangalore, security automation in indiranagar, security automation in bengaluru, security automation in bhubaneshwar, security automation in cuttack, , security automation in usa';
  }

  public CaptureClicks(cta: string): void {
    this.analytics.HomeCtaEvent(cta);
  }
}

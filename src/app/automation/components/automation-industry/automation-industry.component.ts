import { Component } from '@angular/core';
import { GoasosTitleService } from '../../../common/services/title.service';
import { MetaService } from '../../../common/services/meta.service';
import { IndustryContent } from '../../models';
import { AnalyticsService } from '../../../common/services/analytics.service';
import { ContactLocationService } from '../../../common/services/contact-location.service';

@Component({
  selector: 'app-automation-industry',
  templateUrl: './automation-industry.component.html',
  styleUrl: './automation-industry.component.scss'
})
export class AutomationIndustryComponent {

  public content: IndustryContent[] = [
    {
      alt: 'FMS', icon: 'fleet', h3: 'Fleet Management Systems', p: 'Transform your transportation operations with a smart, cloud-connected system.', points: [
        { h4: 'Key Features:', points: ['Interfaces with ADAS processors for real-time event detection', 'GNSS integration for precise navigation and location tracking', 'GPRS connectivity for seamless cloud communication', 'Instant alerts, route optimization and maintenance scheduling', 'Centralized dashboard with performance analytics'] }
      ]
    },
    {
      alt: 'machine', icon: 'machine_automation', h3: 'Machine Automation', p: 'Transform your facility operations with our comprehensive machine automation solutions. We specialize in automating and monitoring critical equipment including air compressors, chillers, generators, smart meters, and circuit breakers.', points: [
        { h4: 'System Capabilities:', points: ['Real-time monitoring of energy use and system health', 'Predictive maintenance to prevent failures', 'Centralized control dashboard for all connected equipment'] },
      ]
    },
    {
      alt: 'cool', icon: 'cooling', h3: 'Cold Storage Monitoring', p: 'Safeguard temperature-sensitive inventory with our advanced cold storage monitoring solution.', points: [
        { h4: 'Technology Stack:', points: ['BLE nodes for accurate temperature/humidity readings', 'GPS sensors for continuous asset tracking during transit', 'Automated alerts for temperature deviations'] },
        { h4: 'Industries Served:', points: ['Pharmaceuticals, food processing, cold-chain logistics'] }
      ]
    },
    {
      alt: 'asset', icon: 'tracking', h3: 'Asset Tracking & Geo-fencing', p: 'Gain complete visibility of your valuable assets with our comprehensive tracking and geo-fencing system.', points: [
        { h4: 'Key Technologies:', points: ['BLE beacons/tags + reader gateways for signal transmission', 'Indoor triangulation accuracy within 1-2 meters', 'Outdoor GPS tracking and custom geo-fencing zones'] },
        { h4: 'Functional Benefits:', points: ['Instant alerts for boundary breaches', 'Movement history and usage analytics', 'Enhances resource planning and logistics efficiency'] }
      ]
    },
    {
      alt: 'sos', icon: 'sos', h3: 'Panic Button/SOS/Emergency Response Systems', p: 'Strengthen safety protocols with rapid emergency alert systems.', points: [
        { h4: 'System Highlights:', points: ['GPS & GPRS-enabled panic alert devices', 'Configurable alerts via mobile app', 'Auto-transmission of location, driver, and vehicle data to cloud', 'Customizable response protocols based on severity'] },
        { h4: 'Impact:', points: ['Speeds up response time by up to 60%', 'Boosts worker safety and reduces risk', 'Ideal for logistics, field teams, and isolated job sites'] }
      ]
    },
    {
      alt: 'power', icon: 'power', h3: 'Power Substation Monitoring & Control', p: 'Ensure reliable, efficient energy distribution and fault prevention.', points: [
        { h4: 'Technical Features:', points: ['GPRS-based IoT devices with MODBUS RTU protocol', 'Real-time tracking of electrical parameters and system status', 'Monitors circuit breakers, isolators, and relays'] },
        { h4: 'Operational Advantages:', points: ['Fault detection before major failures', 'Predictive maintenance insights', 'Up to 45% reduction in unplanned downtime', 'Enhances power quality and safety compliance'] }
      ]
    },
    {
      alt: 'solar', icon: 'solar', h3: 'Solar Farm Remote Monitoring', p: 'Maximize performance and reliability of your renewable assets.', points: [
        { h4: 'Solution Capabilities:', points: ['GPRS connectivity for remote data transmission', 'Monitoring of solar panels, MPPT chargers, and batteries', 'Retrofitting with custom sensors for power metrics', 'Predictive maintenance and energy analytics'] },
        { h4: 'Key Benefits:', points: ['Boosts energy output', 'Cuts maintenance costs', 'Centralized control for multiple installations', 'Ideal for scalable renewable energy operations'] }
      ]
    }
  ];

  constructor(title: GoasosTitleService,
    meta: MetaService,
    public analytics: AnalyticsService,
    public cont: ContactLocationService
  ) {
    title.UpdateTitle = 'Industrial Automation Solutions Provider | Factory Automation Systems in Bangalore, Bhubaneswar & Cuttack';
    meta.Description = 'Transform your manufacturing with our advanced industrial automation solutions. From machine automation solutions to cloud-based solutions, we deliver customized systems that boost efficiency and reduce costs—available in Bangalore, Bhubaneswar & Cuttack.';
    meta.Keywords = 'industry automation, industry automation in bangalore, industry automation in indiranagar, industry automation in bengaluru, industry automation in bhubaneshwar, industry automation in cuttack, , industry automation in usa';
  }

  public CaptureClicks(cta: string): void {
    this.analytics.HomeCtaEvent(cta);
  }
}

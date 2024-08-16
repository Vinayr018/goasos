import { Component } from '@angular/core';
import { Box } from '../../../common/models';
import { BaseLocationService } from '../../../common/services/base-location.service';

@Component({
  selector: 'app-automation-industry',
  templateUrl: './automation-industry.component.html',
  styleUrl: './automation-industry.component.scss'
})
export class AutomationIndustryComponent {
  public boxes: Box[] = [
    { img: '/images/automation/industry/fms.png', alt: 'FMS', header: 'Fleet management system on cloud', body: 'Interface with ADAS processor for ADAS event recognition, Connects to cloud via GPRS through a cellular modem, Integrated GNSS for Navigation' },
    { img: '/images/automation/industry/machine.png', alt: 'machine', header: 'Machine Automation', body: 'Automate and monitor Air Compressors, Chillers, Generators, smart meters, Circuit breakers' },
    { img: '/images/automation/industry/coldstorage.png', alt: 'cold storage', header: 'Cold storage monitoring', body: 'BLE nodes to measure temperature and humidity, GPS sensor in ioT device will continuously keep track of location' },
    { img: '/images/automation/industry/tracking.png', alt: 'tracking', header: 'Asset tag and trace & Geo fencing', body: 'Bluetooth (BLE) Beacons/tags, Readers Gateways to read beacon signals and to communicate to cloud, Triangulation for indoor positioning. Geo fencing as per warehouse perimeter' },
    { img: '/images/automation/industry/sos.png', alt: 'SOS', header: 'Panic button/SoS/Emergency button', body: 'GPS & GPRS based device for raising panic alerts, alarms, triggering SoS and emergency requests configurable via mobile app. Location, vehicle & driver details sent regularly to cloud' },
    { img: '/images/automation/industry/substation.png', alt: 'substation', header: 'Power Substation Monitoring & Control', body: 'GPRS based IoT device, MODBUS RTU communication to fetch electrical parameters to monitor power quality from the control panel. Track changes in all electrical parameters, circuit breakers, Isolators & Relay status to identify the faults and suggest recovery tips to maintain the power quality' },
    { img: '/images/automation/industry/solar.png', alt: 'solar', header: 'Remote monitoring of Solar farm', body: 'GPRS based, condition monitoring of solar panel, MPPT charger & Battery, Retrofitting of custom sensors to measure power, Condition monitoring, Predictive maintenance of Solar plant equipment' }
  ];

  constructor(public base: BaseLocationService) { }
}

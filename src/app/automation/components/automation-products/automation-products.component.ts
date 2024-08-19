import { Component } from '@angular/core';
import { BaseLocationService } from '../../../common/services/base-location.service';
import { NavigationBehaviorOptions, Router } from '@angular/router';

@Component({
  selector: 'app-automation-products',
  templateUrl: './automation-products.component.html',
  styleUrl: './automation-products.component.scss'
})
export class AutomationProductsComponent {

  public officeProducts: any[] = [
    { title: 'Access cards', img: 'images/automation/office/access.jpg', alt: 'access card', desc: 'Access card automation to restrict the general access to your work place.', targetRoute: '/automation/office', param: 'one' },
    { title: 'Conference room automation', img: 'images/automation/office/conference.jpeg', alt: 'conference', desc: 'Automate conference room.', targetRoute: '/automation/office', param: 'two' },
    { title: 'Lights & CCTV automation', img: 'images/automation/office/overall.webp', alt: 'overall', desc: 'automatically control the lighting and cctv cameras with mobile devices.', targetRoute: '/automation/office', param: 'three' },
    { title: 'Lights & CCTV automation', img: 'images/automation/office/parking.gif', alt: 'parking', desc: 'office parking automation.', targetRoute: '/automation/office', param: 'four' },
  ];

  public industryProducts: any[] = [
    { title: 'Fleet management system on cloud', img: 'images/automation/industry/fms.png', alt: 'fleetmanagement', desc: 'fleet managment automation.', targetRoute: '/automation/industry', param: 'one' },
    { title: 'Machine Automation', img: 'images/automation/industry/machine.png', alt: 'machine', desc: 'automate your electrical machines.', targetRoute: '/automation/industry', param: 'two' },
    { title: 'Cold storage truck Automation', img: 'images/automation/industry/coldstorage.png', alt: 'coldstorage', desc: 'cold storage truck monitoring.', targetRoute: '/automation/industry', param: 'three' },
    { title: 'Asset tracking', img: 'images/automation/industry/tracking.png', alt: 'tracking', desc: 'asset tracking.', targetRoute: '/automation/industry', param: 'four' },
    { title: 'SoS panic button automation', img: 'images/automation/industry/sos.png', alt: 'sos', desc: 'Panic button automation.', targetRoute: '/automation/industry', param: 'five' },
    { title: 'Power station automation', img: 'images/automation/industry/substation.png', alt: 'substation', desc: 'Automation the power station monitoring/operation.', targetRoute: '/automation/industry', param: 'six' },
    { title: 'Solar farm automation', img: 'images/automation/industry/solar.png', alt: 'solar', desc: 'monitor solar farm remotely.', targetRoute: '/automation/industry', param: 'seven' },
  ];

  constructor(public path: BaseLocationService, private router: Router) { }

  public Navigate(route: string, param: string): void {
    const ex: NavigationBehaviorOptions = { state: { routeId: param } };
    console.log(ex.state,'state');
    this.router.navigate([route], { state: { routeId: param } });
  }
}

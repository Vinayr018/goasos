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

  constructor(public path: BaseLocationService, private router: Router) { }

  public Navigate(route: string, param: string): void {
    const ex: NavigationBehaviorOptions = { state: { routeId: param } };
    console.log(ex.state,'state');
    this.router.navigate([route], { state: { routeId: param } });
  }
}

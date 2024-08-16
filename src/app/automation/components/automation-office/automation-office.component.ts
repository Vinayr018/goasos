import { Component } from '@angular/core';
import { Box } from '../../../common/models';

@Component({
  selector: 'app-automation-office',
  templateUrl: './automation-office.component.html',
  styleUrl: './automation-office.component.scss'
})
export class AutomationOfficeComponent {
  public boxes: Box[] = [
    { img: '/images/automation/office/access.jpg', alt: 'office acess', header: 'Access card automation', body: 'Automate office with Access cards.' },
    { img: '/images/automation/office/conference.jpeg', alt: 'conference room automation', header: 'Conference room automation', body: 'Automate conference room.' },
    { img: '/images/automation/office/overall.webp', alt: 'overall automation', header: 'Lights & CCTV automation', body: 'automatically control the lighting and cctv cameras with mobile devices' },
    { img: '/images/automation/office/parking.gif', alt: 'parking', header: 'Parking automation', body: 'Parking automation' }
  ];
}

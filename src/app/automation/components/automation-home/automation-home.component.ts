import { Component } from '@angular/core';
import { Box } from '../../../common/models';

@Component({
  selector: 'app-automation-home',
  templateUrl: './automation-home.component.html',
  styleUrl: './automation-home.component.scss'
})
export class AutomationHomeComponent {
  public boxes: Box[] = [
    { img: '/images/automation/home/gateautomation.jpg', alt: 'gateautomation', header: 'Gate automation', body: 'Automating gate operation using mobile.' },
    { img: '/images/automation/home/doorlock.jpg', alt: 'doorlock', header: 'Door automation', body: 'door lock operation automation using mobile.' },
    { img: '/images/automation/home/light.png', alt: 'light', header: 'Lights automation', body: 'control the lighting with mobile devices with RGB to change the color' },
    { img: '/images/automation/home/curtainautomation.jpg', alt: 'curtainautomation', header: 'Curtian automation', body: 'control curtians with mobile device' },
  ];
}

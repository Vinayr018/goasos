import { Component } from '@angular/core';
import { Box } from '../../../common/models';

@Component({
  selector: 'app-automation-security',
  templateUrl: './automation-security.component.html',
  styleUrl: './automation-security.component.scss'
})
export class AutomationSecurityComponent {
  public boxes: Box[] = [
    { img: '/images/automation/security/cctv.jpeg', alt: 'cctv', header: 'CCTV installation', body: 'CCTV installation powered by Solar panel', id:'one'  },
    { img: '/images/automation/security/cctvdevice.jpg', alt: 'cctv devices', header: 'CCTV installation with centeralised control', body: 'CCTV installation with centeralised control via mobile app', id:'two'  },
    { img: '/images/automation/security/cctvnotification.jpg', alt: 'cctv notification', header: 'CCTV activity notification', body: 'get notified on mobile App whenever there is any movment detected', id:'three'  },
  ];
}

import { Component } from '@angular/core';
import { Box } from '../../../common/models';

@Component({
  selector: 'app-automation-space',
  templateUrl: './automation-space.component.html',
  styleUrl: './automation-space.component.scss'
})
export class AutomationSpaceComponent {
  public boxes: Box[] = [
    { img: '/images/automation/space/beddesk.png', alt: 'beddesk', header: 'Bed with storage and iDesk', body: 'Bed with storage and iDesk and comes in all sizes (Single bed, King size, queen size)' },
    { img: '/images/automation/space/bedstorage.png', alt: 'bed storage', header: 'Bed with storage', body: 'Bed with storage and comes in all sizes (Single bed, King size, queen size)' },
    { img: '/images/automation/space/bedsofa.png', alt: 'bed sofa', header: 'Bed with storage and Sofa', body: 'Bed with storage and Sofa and comes in all sizes (Single bed, King size, queen size)' },
  ];
}

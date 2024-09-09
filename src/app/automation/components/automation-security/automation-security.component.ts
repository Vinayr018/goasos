import { Component } from '@angular/core';
import { AutomationDataService } from '../../services/data.service';
import { Box } from '../../../common/models';

@Component({
  selector: 'app-automation-security',
  templateUrl: './automation-security.component.html',
  styleUrl: './automation-security.component.scss'
})
export class AutomationSecurityComponent {

  public boxes: Box[];

  constructor(private service: AutomationDataService) {
    this.boxes = service.Security;
  }
}

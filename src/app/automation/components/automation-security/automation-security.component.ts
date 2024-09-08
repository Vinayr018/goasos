import { Component } from '@angular/core';
import { AutomationDataService } from '../../services/data.service';

@Component({
  selector: 'app-automation-security',
  templateUrl: './automation-security.component.html',
  styleUrl: './automation-security.component.scss'
})
export class AutomationSecurityComponent {
  constructor(public service: AutomationDataService){}
}

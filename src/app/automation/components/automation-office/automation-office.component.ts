import { Component } from '@angular/core';
import { Box } from '../../../common/models';
import { AutomationDataService } from '../../services/data.service';

@Component({
  selector: 'app-automation-office',
  templateUrl: './automation-office.component.html',
  styleUrl: './automation-office.component.scss'
})
export class AutomationOfficeComponent {
  constructor(public service: AutomationDataService){}
}

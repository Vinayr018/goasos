import { Component } from '@angular/core';
import { Box } from '../../../common/models';
import { AutomationDataService } from '../../services/data.service';

@Component({
  selector: 'app-automation-industry',
  templateUrl: './automation-industry.component.html',
  styleUrl: './automation-industry.component.scss'
})
export class AutomationIndustryComponent {
  constructor(public service: AutomationDataService){}
}
